import { FC, useEffect, useRef, useState } from "react";
import axios from "axios";

import {
  Box,
  Container,
  Typography,
  TableContainer,
  Table,
  TableBody,
  Button,
  Stack
} from "@mui/material";

import { ITransaction } from "src/entities/models/transaction";

import { useAppSelector } from "src/app/store/store";
import { getSettings } from "src/app/store/slices/settings/settingsSlice";

import { SortEnum } from "src/entities/models/sort";
import { SortToggle } from "src/features";
import { sortServiceInst } from "src/shared/sort-service";

import { TransactionRow, TransactionRowHead, TransactionRowLoader } from "./ui";

import "./SectionListTransaction.scss";

const transactionUrl = "/data/transaction-list.json?url";
const transactionRestUrl = "/data/transaction-list-rest.json?url";

const SectionListTransaction: FC = () => {
  const settings = useAppSelector(getSettings);

  const ref = useRef(false);
  const [sortType, setSortType] = useState<SortEnum | null>(null);
  const [transactions, setTransactions] = useState<ITransaction[]>([]);
  const [isShowingLoadmore, setIsShowingLoadmore] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);

  async function loadData(): Promise<void> {
    try {
      setIsLoading(true);
      const response = await axios.get<ITransaction[]>(transactionUrl);
      setTransactions(response.data);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  }

  async function onLoadMore(): Promise<void> {
    setSortType(null);
    try {
      setIsLoadingMore(true);
      const response = await axios.get<ITransaction[]>(transactionRestUrl);
      setIsShowingLoadmore(false);
      setTransactions((prev) => [...prev, ...response.data]);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoadingMore(false);
    }
  }

  function onChangeSort(sortTypeValue: SortEnum): void {
    const result = sortServiceInst.getSortedData(
      [...transactions],
      sortTypeValue
    ) as ITransaction[];
    setSortType(sortTypeValue);
    setTransactions(result);
  }

  useEffect(() => {
    if (ref.current) {
      loadData();
    }
    return () => {
      ref.current = true;
    };
  }, []);

  return (
    <Box component="section" py={{ xs: "22px", md: "48px" }}>
      <Container>
        <Stack
          direction="row"
          justifyContent="space-between"
          gap="20px"
          mb={{ xs: "16px", md: "16px" }}
        >
          <Typography variant="h2">
            <Typography
              component="span"
              fontSize="inherit"
              display={{ xs: "none", md: "inline-block" }}
            >
              Last
            </Typography>{" "}
            Transactions
          </Typography>
          <SortToggle onChange={onChangeSort} sortTypeValue={sortType} />
        </Stack>

        <Box mb={{ xs: "16px", md: "36px" }}>
          {isLoading ? (
            <TableContainer className="transaction-table">
              <Table aria-label="transaction list">
                <TableBody>
                  {[...Array(3)].map((_, index) => (
                    <TransactionRowLoader key={index} />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          ) : (
            <>
              {transactions.map(
                ({ id, image, amount, date, number, status, title }) => (
                  <Box key={id} mb={{ xs: "14px", md: "6px" }}>
                    <TransactionRowHead
                      image={image}
                      title={title}
                      status={status}
                    />
                    <TableContainer className="transaction-table">
                      <Table aria-label="transaction list">
                        <TableBody>
                          <TransactionRow
                            image={image}
                            amount={amount}
                            date={date}
                            number={number}
                            status={status}
                            title={title}
                            currencySymbol={settings.currencySymbol}
                          />
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Box>
                )
              )}
            </>
          )}
        </Box>
        {isShowingLoadmore && (
          <Stack alignItems="center">
            <Button
              variant="contained"
              color="secondary"
              disabled={isLoadingMore}
              onClick={onLoadMore}
              sx={{
                maxWidth: "280px",
                width: "100%"
              }}
            >
              Show More
            </Button>
          </Stack>
        )}
      </Container>
    </Box>
  );
};

export default SectionListTransaction;
