import { FC, useState } from "react";

import { Box, Container, Typography, Stack } from "@mui/material";
import { PromoCode } from "src/features";

const SectionPromocode: FC = () => {
  const [isSuccessPromocode, setIsSuccessPromocode] = useState<boolean>(false);

  function onSendPromocode(value: string): void {
    console.log(value);
    setIsSuccessPromocode(true);
  }

  return (
    <Box component="section" py={{ xs: "10px", md: "10px" }}>
      <Container>
        <Stack gap="10px" maxWidth="664px">
          <Typography variant="h3">Have A promo code?</Typography>
          <Typography variant="body2" fontSize={{ xs: "10px", md: "16px" }}>
            Enter promo code here. It will activate a special bonus!
          </Typography>
          <PromoCode onClick={onSendPromocode} success={isSuccessPromocode} />
        </Stack>
      </Container>
    </Box>
  );
};

export default SectionPromocode;
