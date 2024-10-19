import { FC } from "react";
import {
  SectionListTransaction,
  SectionPayment,
  SectionPromocode
} from "src/widgets";

const HomePage: FC = () => {
  return (
    <>
      <SectionPayment />
      <SectionPromocode />
      <SectionListTransaction />
    </>
  );
};

export default HomePage;
