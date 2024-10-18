import { FC } from "react";

import { Box, Button, Paper, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import "./PaymentPanelToggler.scss";

interface PaymentPanelTogglerProps {
  image: string;
  title: string;
  commision: number;
  onClick?: () => void;
}

const PaymentPanelToggler: FC<PaymentPanelTogglerProps> = ({
  image,
  title,
  commision,
  onClick
}) => {
  return (
    <Paper elevation={24} className="payment-panel-toggler">
      <Box className="payment-panel-toggler__content">
        <img src={image} alt={title} />
        <Box>
          <Typography
            variant="body1"
            fontWeight={800}
            fontSize={{ xs: "10px", sm: "14px" }}
            mb="6px"
          >
            {title}{" "}
            <Typography
              variant="caption"
              className="payment-panel-toggler__bullet"
            >
              &#9679;
            </Typography>{" "}
            Comission {commision}%
          </Typography>
          <Typography variant="body2" fontSize={{ xs: "6px", sm: "12px" }}>
            Please notice that you will send money in the USD
          </Typography>
        </Box>
      </Box>
      <KeyboardArrowDownIcon className="payment-panel-toggler__icon" />
      <Button
        variant="text"
        onClick={onClick}
        className="payment-panel-toggler__button"
      />
    </Paper>
  );
};

export default PaymentPanelToggler;
