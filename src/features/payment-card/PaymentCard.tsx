import { FC } from "react";

import { Box, Paper, Typography, Button } from "@mui/material";

import "./PaymentCard.scss";

interface PaymentCardProps {
  id: string;
  image: string;
  title: string;
  commission: number;
  onClick: () => void;
}

const PaymentCard: FC<PaymentCardProps> = ({
  image,
  title,
  commission,
  onClick
}) => {
  return (
    <Paper className="payment-card" elevation={24}>
      <Box className="payment-card__logo-wrapper">
        <img src={image} alt={title} className="payment-card__logo" />
      </Box>
      <Box className="payment-card__body">
        <Typography variant="caption">{title}</Typography>
        <Typography variant="body2">Commission {commission}%</Typography>
      </Box>
      <Button
        variant="text"
        onClick={onClick}
        className="payment-card__button"
      />
    </Paper>
  );
};

export default PaymentCard;
