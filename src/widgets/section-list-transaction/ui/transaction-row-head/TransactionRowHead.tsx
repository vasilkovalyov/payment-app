import { FC } from "react";

import { Typography, Box } from "@mui/material";

import { TransactionStatusColor } from "src/shared/transaction-status-color";
import { TransactionStatus } from "src/entities/models/transaction-status";

import "./TransactionRowHead.scss";

interface TransactionRowHeadProps {
  image: string;
  title: string;
  status: TransactionStatus;
}

const TransactionRowHead: FC<TransactionRowHeadProps> = ({
  image,
  title,
  status
}) => {
  return (
    <Box className="transaction-row-head">
      <Box className="transaction-row-head__logo">
        <img src={image} alt={title} />
      </Box>
      <Box>
        <Typography
          variant="body1"
          color={TransactionStatusColor[status]}
          textTransform="capitalize"
          className="transaction-row-head__title"
        >
          {status}
        </Typography>
        <Typography className="transaction-row-head__head">
          Operation Status
        </Typography>
      </Box>
    </Box>
  );
};

export default TransactionRowHead;
