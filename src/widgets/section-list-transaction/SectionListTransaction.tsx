import { FC, useEffect, useState } from "react";
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

import { TransactionRow, TransactionRowLoader } from "./ui";

import "./SectionListTransaction.scss";

const transactionUrl = "/data/transaction-list.json?url";
const transactionRestUrl = "/data/transaction-list-rest.json?url";

const SectionListTransaction: FC = () => {
  const settings = useAppSelector(getSettings);

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

  function onChangeSort(sortType: SortEnum): void {
    const result = sortServiceInst.getSortedData(
      [...transactions],
      sortType
    ) as ITransaction[];
    setTransactions(result);
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Box
      component="section"
      py={{ xs: "22px", md: "48px" }}
      className="section-list-transaction"
    >
      <Container className="section-list-transaction__container">
        <Stack
          direction="row"
          justifyContent="space-between"
          gap="20px"
          mb={{ xs: "16px", md: "16px" }}
        >
          <Typography variant="h2">Last Transactions</Typography>
          <SortToggle onChange={onChangeSort} />
        </Stack>

        <Box mb={{ xs: "16px", md: "36px" }}>
          <TableContainer className="transaction-table">
            <Table aria-label="transaction list">
              <TableBody>
                {isLoading ? (
                  <>
                    {[...Array(3)].map((_, index) => (
                      <TransactionRowLoader key={index} />
                    ))}
                  </>
                ) : (
                  <>
                    {transactions.map(
                      ({ id, image, amount, date, number, status, title }) => (
                        <TransactionRow
                          key={id}
                          image={image}
                          amount={amount}
                          date={date}
                          number={number}
                          status={status}
                          title={title}
                          currencySymbol={settings.currencySymbol}
                        />
                      )
                    )}
                  </>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        {isShowingLoadmore && (
          <Stack alignItems="center">
            <Button
              variant="contained"
              color="secondary"
              className="section-list-transaction__show-more-button"
              disabled={isLoadingMore}
              onClick={onLoadMore}
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
