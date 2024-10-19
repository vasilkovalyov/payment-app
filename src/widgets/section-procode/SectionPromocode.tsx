import { FC } from "react";

import { Box, Container, Typography, Stack } from "@mui/material";
import { PromoCode } from "src/features";

const SectionPromocode: FC = () => {
  function onSendPromocode(value: string): void {
    console.log(value);
  }

  return (
    <Box component="section" py={{ xs: "10px", md: "10px" }}>
      <Container>
        <Stack gap="10px" maxWidth="664px">
          <Typography variant="h5">Have A promo code?</Typography>
          <Typography variant="body2" fontSize={{ xs: "10px", md: "16px" }}>
            Enter promo code here. It will activate a special bonus!
          </Typography>
          <PromoCode onClick={onSendPromocode} />
        </Stack>
      </Container>
    </Box>
  );
};

export default SectionPromocode;
