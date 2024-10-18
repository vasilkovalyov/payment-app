import { FC, useEffect, useState } from "react";
import axios from "axios";

import { Box, Container, Typography, Stack } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import { CardList, DialogModal, PaymentCard } from "src/features";

import { IPaymentCard } from "src/entities/models";
import useDialogModal from "src/hooks/useDialogModal";

import { PaymentDeposit } from "../payment-deposit";

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
  const [selectedPlan, setSelectedPlan] = useState<IPaymentCard | null>(null);

  const { isOpenModal, openModal, closeModal } = useDialogModal();

  function onClickPaymentCard(props: IPaymentCard): void {
    setSelectedPlan(props);
    openModal();
  }

  function loadData(): void {
    setIsLoading(true);

    Promise.all(arrayRequests)
      .then(([response1, response2]) => {
        const dataObj = {
          [CardKeyEnum.MoneyCards]: response1.data as IPaymentCard[],
          [CardKeyEnum.CryptoCards]: response2.data as IPaymentCard[]
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

  function onCloseModal(): void {
    setSelectedPlan(null);
    closeModal();
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
            renderCard={(props: IPaymentCard) => {
              const { id, image, title, commission } = props;
              return (
                <PaymentCard
                  id={id}
                  image={image}
                  title={title}
                  commission={commission}
                  onClick={() => onClickPaymentCard(props)}
                />
              );
            }}
            loading={isLoading}
          />
          <CardList
            title="Cryptocurrency"
            items={paymentCards[CardKeyEnum.CryptoCards]}
            renderCard={(props: IPaymentCard) => {
              const { id, image, title, commission } = props;
              return (
                <PaymentCard
                  id={id}
                  image={image}
                  title={title}
                  commission={commission}
                  onClick={() => onClickPaymentCard(props)}
                />
              );
            }}
            loading={isLoading}
          />
        </Stack>
      </Container>
      <DialogModal
        open={isOpenModal}
        title="Back to Payment Methods"
        pretitleIcon={<ChevronLeftIcon />}
        onClose={onCloseModal}
      >
        {selectedPlan && <PaymentDeposit paymentPlan={selectedPlan} />}
      </DialogModal>
    </Box>
  );
};

export default SectionPayment;
