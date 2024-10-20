import { FC, useState } from "react";

import { Typography, Box, Stack, Button } from "@mui/material";

import {
  PaymentCalculation,
  PaymentPanelToggler,
  PromoCode
} from "src/features";

import { AppColors } from "src/shared/themes";

import { IPaymentCard } from "src/entities/models";

import { useAppSelector } from "src/app/store/store";
import { getUser } from "src/app/store/slices/user/userSlice";
import { getSettings } from "src/app/store/slices/settings/settingsSlice";

import "./PaymentDeposit.scss";

interface PaymentDepositProps {
  paymentPlan: IPaymentCard;
  onSubmit: (amount: number, promocode: string | null) => void;
}

const PaymentDeposit: FC<PaymentDepositProps> = ({ paymentPlan, onSubmit }) => {
  const user = useAppSelector(getUser);
  const settings = useAppSelector(getSettings);

  const [isSuccessPromocode, setIsSuccessPromocode] = useState<boolean>(false);

  const [amount, setAmount] = useState<number>(21);
  const maxAmount = 906.0;

  const [promocode, setPromocode] = useState<string | null>(null);

  function onChangePromoCode(value: string): void {
    setPromocode(value);
    setIsSuccessPromocode(true);
  }

  function onHandleSubmit(): void {
    onSubmit(amount, promocode);
  }

  function onChangePaymentCalculation(value: number): void {
    setAmount(value);
  }

  return (
    <Stack gap="20px" className="payment-deposit">
      <Stack
        bgcolor={AppColors.Primary}
        alignItems="center"
        justifyContent="center"
        direction="row"
        padding="8px"
        gap="8px"
        marginInline={{ xs: "0", md: "-34px" }}
        borderRadius={{ xs: "6px", md: "0" }}
      >
        <Typography fontWeight={800}>Current Balance: </Typography>
        <Typography
          component="span"
          fontSize={{ xs: "18px", md: "24px" }}
          fontWeight={900}
        >
          {settings.currencySymbol}
        </Typography>
        <Typography
          component="span"
          fontSize={{ xs: "18px", md: "24px" }}
          fontWeight={900}
        >
          {user?.balance}
        </Typography>
      </Stack>
      <PaymentPanelToggler
        image={paymentPlan.image}
        title={paymentPlan.title}
        commision={paymentPlan.commission}
        currencyType={settings.currencyType}
      />
      <PaymentCalculation
        title="Amount"
        amount={amount}
        maxAmount={maxAmount}
        currencySybmol={settings.currencySymbol}
        currencyType={settings.currencyType}
        increaseAmounts={[10, 20, 30, 50, 100]}
        onChange={onChangePaymentCalculation}
      />
      <Box>
        <Typography
          variant="h6"
          fontWeight={800}
          mb={{ xs: "8px", md: "14px" }}
        >
          Promo Code
        </Typography>
        <PromoCode
          placeholder="Enter promo code here"
          success={isSuccessPromocode}
          onClick={onChangePromoCode}
        />
      </Box>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        fullWidth
        onClick={onHandleSubmit}
      >
        Deposit
      </Button>
    </Stack>
  );
};

export default PaymentDeposit;
