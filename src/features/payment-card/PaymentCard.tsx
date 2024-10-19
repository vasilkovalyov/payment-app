import { FC } from "react";

import { Box, Paper, Typography, Button } from "@mui/material";

import "./PaymentCard.scss";

interface PaymentCardProps {
  id: string;
  image: string;
  title: string;
  commission: number;
  popular?: boolean;
  trusted?: boolean;
  onClick: () => void;
}

const PaymentCard: FC<PaymentCardProps> = ({
  image,
  title,
  commission,
  popular,
  trusted,
  onClick
}) => {
  if (popular && trusted) {
    throw new Error(
      "You can only set one of the properties: popular or trusted"
    );
  }
  return (
    <Paper className="payment-card" elevation={24}>
      {popular && (
        <Box className="payment-card__badge payment-card__badge--popular">
          popular
        </Box>
      )}
      {trusted && (
        <Box className="payment-card__badge payment-card__badge--trusted">
          trusted
        </Box>
      )}
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
