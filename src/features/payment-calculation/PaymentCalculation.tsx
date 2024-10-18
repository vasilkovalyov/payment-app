import { FC, useState } from "react";

import { Typography, Stack, Grid, Button } from "@mui/material";

import { AppColors } from "src/shared/themes";

import "./PaymentCalculation.scss";

export type PaymentCalculationProps = {
  title: string;
  amount: number;
  maxAmount: number;
  increaseAmounts: number[];
};

const PaymentCalculation: FC<PaymentCalculationProps> = ({
  title,
  amount,
  maxAmount,
  increaseAmounts
}) => {
  const [updatedAmount, setUpdatedAmount] = useState<number>(amount);

  const isRichMaxAmount = (value: number): boolean =>
    updatedAmount + value > maxAmount;

  function onUpdateAmount(value: number): void {
    if (isRichMaxAmount(value)) return;
    setUpdatedAmount((prev) => prev + value);
  }

  return (
    <Stack gap={{ xs: "12px", md: "20px" }} className="payment-calculation">
      <Typography variant="h6" textAlign="center" fontSize={{ md: "18px" }}>
        {title}
      </Typography>
      <Stack gap="10px">
        <Stack
          borderRadius="4px"
          bgcolor={AppColors.Dark3}
          direction="row"
          justifyContent="center"
          padding={{ xs: "6px", md: "12px" }}
          gap="6px"
        >
          <Typography
            variant="body1"
            fontWeight={800}
            fontSize={{ md: "18px" }}
          >
            $
          </Typography>
          <Typography
            variant="body1"
            fontWeight={800}
            fontSize={{ md: "18px" }}
          >
            {updatedAmount}
          </Typography>
        </Stack>
        <Grid container gap={{ xs: "6px", md: "16px" }}>
          {increaseAmounts.map((number, index) => (
            <Grid key={index} item flex={1}>
              <Button
                className="payment-calculation__button"
                onClick={() => onUpdateAmount(number)}
                disabled={isRichMaxAmount(number)}
              >
                + {""} ${number}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Stack>
      <Typography
        variant="body2"
        fontSize={{ xs: "12px", md: "14px" }}
        textAlign="center"
      >
        From {updatedAmount} to 906.00 USD at a time
      </Typography>
    </Stack>
  );
};

export default PaymentCalculation;
