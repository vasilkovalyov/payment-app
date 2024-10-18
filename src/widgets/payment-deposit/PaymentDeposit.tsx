import { FC, useState } from "react";

import { Typography, Box, Stack, Button } from "@mui/material";

import {
  PaymentCalculation,
  PaymentPanelToggler,
  PromoCode
} from "src/features";

import { AppColors } from "src/shared/themes";

import { IPaymentCard } from "src/entities/models";

import "./PaymentDeposit.scss";

interface PaymentDepositProps {
  paymentPlan: IPaymentCard;
}

const PaymentDeposit: FC<PaymentDepositProps> = ({ paymentPlan }) => {
  const [promocode, setPromocode] = useState<string | null>(null);

  function onChangePromoCode(value: string): void {
    setPromocode(value);
  }

  function onSubmit(): void {
    alert(promocode);
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
          $
        </Typography>
        <Typography
          component="span"
          fontSize={{ xs: "18px", md: "24px" }}
          fontWeight={900}
        >
          0.00
        </Typography>
      </Stack>
      <PaymentPanelToggler
        image={paymentPlan.image}
        title={paymentPlan.title}
        commision={paymentPlan.commission}
      />
      <PaymentCalculation
        title="Amount"
        amount={21}
        maxAmount={906}
        increaseAmounts={[10, 20, 30, 50, 100]}
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
          title="Promo Code"
          placeholder="Enter promo code here"
          onClick={onChangePromoCode}
        />
      </Box>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        fullWidth
        onClick={onSubmit}
      >
        Deposit
      </Button>
    </Stack>
  );
};

export default PaymentDeposit;
