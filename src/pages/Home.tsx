import { FC } from "react";

import { Box, Container, Typography } from "@mui/material";

import {
  SectionListTransaction,
  SectionPayment,
  SectionPromocode
} from "src/widgets";

const HomePage: FC = () => {
  return (
    <Box pt={{ xs: "22px", md: "34px" }}>
      <Container>
        <Typography variant="h2" mb={{ xs: "16px", md: "34px" }}>
          Make a deposit
        </Typography>
        <Typography variant="h3" mb="24px">
          Choose payment method
        </Typography>
      </Container>
      <SectionPayment />
      <SectionPromocode />
      <SectionListTransaction />
    </Box>
  );
};

export default HomePage;
