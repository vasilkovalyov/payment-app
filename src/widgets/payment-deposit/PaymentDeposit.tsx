import { FC, useState } from "react";

import { Typography, Box, Stack, Button } from "@mui/material";

import { PaymentCalculation, PromoCode } from "src/features";

import { AppColors } from "src/shared/themes";

import "./PaymentDeposit.scss";

const PaymentDeposit: FC = () => {
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
        fullWidth
        onClick={onSubmit}
      >
        Deposit
      </Button>
    </Stack>
  );
};

export default PaymentDeposit;
