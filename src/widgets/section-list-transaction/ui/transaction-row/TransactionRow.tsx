import { FC } from "react";
import dayjs from "dayjs";

import { Typography, TableRow, TableCell, Box } from "@mui/material";

import { getFormattedCurrency } from "src/shared/utils";
import { TransactionStatusColor } from "src/shared/transaction-status-color";
import { TransactionStatus } from "src/entities/models/transaction-status";

import "./TransactionRow.scss";

interface TransactionRowProps {
  image: string;
  title: string;
  number: string;
  date: string;
  amount: number;
  currencySymbol: string;
  status: TransactionStatus;
}

const TransactionRow: FC<TransactionRowProps> = ({
  image,
  title,
  number,
  date,
  amount,
  status,
  currencySymbol
}) => {
  const dateFormatted = dayjs(date).format("DD.MM h:mmA").split(" ");

  return (
    <>
      <TableRow className="transaction-row">
        <TableCell className="transaction-row__cell">
          <Box className="transaction-row__logo">
            <img src={image} alt={title} />
          </Box>
        </TableCell>
        <TableCell className="transaction-row__cell">
          <Typography variant="body1" className="transaction-row__title">
            {title}
          </Typography>
          <Typography className="transaction-row__head">Withdraw</Typography>
        </TableCell>
        <TableCell className="transaction-row__cell">
          <Typography variant="body1" className="transaction-row__title">
            {number}
          </Typography>
          <Typography className="transaction-row__head">
            Transaction Number
          </Typography>
        </TableCell>
        <TableCell className="transaction-row__cell">
          <Typography variant="body1" className="transaction-row__title">
            {dateFormatted[0]} at {dateFormatted[1]}
          </Typography>
          <Typography className="transaction-row__head">
            Payment Date
          </Typography>
        </TableCell>
        <TableCell className="transaction-row__cell">
          <Typography variant="body1" className="transaction-row__title">
            {getFormattedCurrency(amount)}
            {currencySymbol}
          </Typography>
          <Typography className="transaction-row__head">
            Amount Payed
          </Typography>
        </TableCell>
        <TableCell className="transaction-row__cell">
          <Typography
            variant="body1"
            color={TransactionStatusColor[status]}
            textTransform="capitalize"
            className="transaction-row__title"
          >
            {status}
          </Typography>
          <Typography className="transaction-row__head">
            Operation Status
          </Typography>
        </TableCell>
      </TableRow>
    </>
  );
};

export default TransactionRow;
