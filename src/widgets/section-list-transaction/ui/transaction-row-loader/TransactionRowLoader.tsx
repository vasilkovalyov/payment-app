import { FC } from "react";

import { Typography, TableRow, TableCell, Skeleton } from "@mui/material";

const TransactionRow: FC = () => {
  return (
    <TableRow className="transaction-row">
      <TableCell className="transaction-row__cell">
        <Skeleton animation="wave" variant="text" />
      </TableCell>
      {[...Array(5)].map((_, index) => (
        <TableCell key={index} className="transaction-row__cell">
          <Typography variant="body1" className="transaction-row__title">
            <Skeleton animation="wave" variant="text" />
          </Typography>
          <Typography className="transaction-row__head">
            <Skeleton animation="wave" variant="text" />
          </Typography>
        </TableCell>
      ))}
    </TableRow>
  );
};

export default TransactionRow;
