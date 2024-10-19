import { FC } from "react";

import { Box, Button, Typography } from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

import { useAppSelector } from "src/app/store/store";
import { getUser } from "src/app/store/slices/user/userSlice";

import "./BalanceButton.scss";

const BalanceButton: FC = () => {
  const user = useAppSelector(getUser);

  return (
    <Box className="balance-button">
      <Button
        className="balance-button__more-toggler"
        aria-label="more info balance"
      >
        <Typography component="span" className="balance-button__value">
          {user?.balance} $
        </Typography>
        <Typography component="span" className="balance-button__percent">
          {user?.percent}%
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
