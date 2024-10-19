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

import { TransactionRow, TransactionRowLoader } from "./ui";

import "./SectionListTransaction.scss";

const transactionUrl = "/data/transaction-list.json?url";

const SectionListTransaction: FC = () => {
  const settings = useAppSelector(getSettings);

  const [transactions, setTransactions] = useState<ITransaction[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  async function loadData(): Promise<void> {
    try {
      setIsLoading(true);
      const response = await axios.get(transactionUrl);
      setTransactions(response.data);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
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
        <Typography variant="h2" mb={{ xs: "16px", md: "16px" }}>
          Last Transactions
        </Typography>
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
        <Stack alignItems="center">
          <Button
            variant="contained"
            color="secondary"
            className="section-list-transaction__show-more-button"
          >
            Show More
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default SectionListTransaction;
