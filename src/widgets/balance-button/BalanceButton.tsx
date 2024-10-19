import { FC } from "react";

import { Box, Button, Typography } from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

import "./BalanceButton.scss";

const BalanceButton: FC = () => {
  return (
    <Box className="balance-button">
      <Button
        className="balance-button__more-toggler"
        aria-label="more info balance"
      >
        <Typography component="span" className="balance-button__value">
          125.02 $
        </Typography>
        <Typography component="span" className="balance-button__percent">
          13%
        </Typography>
        <KeyboardArrowDownRoundedIcon />
      </Button>
      <Button className="balance-button__add-toggler" aria-label="add balance">
        <AddRoundedIcon />
      </Button>
    </Box>
  );
};

export default BalanceButton;
