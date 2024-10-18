import { FC, useEffect, useState } from "react";
import axios from "axios";

import { Box, Container, Typography, Stack } from "@mui/material";

import { IPaymentCard } from "src/entities/models";
import { CardList, PaymentCard } from "src/features";

enum CardKeyEnum {
  MoneyCards = "money-cards",
  CryptoCards = "crypto-cards"
}

const arrayUrl = [
  "/data/payment-money-cards.json?url",
  "/data/payment-crypto.cards.json?url"
];

const arrayRequests = [axios.get(arrayUrl[0]), axios.get(arrayUrl[1])];

const SectionPayment: FC = () => {
  const [paymentCards, setPaymentCards] = useState<
    Record<CardKeyEnum, IPaymentCard[]>
  >({
    [CardKeyEnum.MoneyCards]: [],
    [CardKeyEnum.CryptoCards]: []
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  function loadData(): void {
    setIsLoading(true);

    Promise.all(arrayRequests)
      .then(([response1, response2]) => {
        const dataObj = {
          [CardKeyEnum.MoneyCards]: response1.data,
          [CardKeyEnum.CryptoCards]: response2.data
        };
        setPaymentCards(dataObj);
      })
      .catch((error) => {
        console.error("Error with one of the requests:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Box component="section" py={{ xs: "22px", md: "34px" }}>
      <Container>
        <Typography variant="h2" mb={{ xs: "16px", md: "34px" }}>
          Make a deposit
        </Typography>
        <Typography variant="h5" mb="24px">
          Choose payment method
        </Typography>
        <Stack gap="40px">
          <CardList
            title="Cards, e-money, PIN"
            items={paymentCards[CardKeyEnum.MoneyCards]}
            renderCard={({ id, image, title, commission }) => (
              <PaymentCard
                id={id}
                image={image}
                title={title}
                commission={commission}
                onClick={() => console.log(id)}
              />
            )}
            loading={isLoading}
          />
          <CardList
            title="Cryptocurrency"
            items={paymentCards[CardKeyEnum.CryptoCards]}
            renderCard={({ id, image, title, commission }) => (
              <PaymentCard
                id={id}
                image={image}
                title={title}
                commission={commission}
                onClick={() => console.log(id)}
              />
            )}
            loading={isLoading}
          />
        </Stack>
      </Container>
    </Box>
  );
};

export default SectionPayment;
