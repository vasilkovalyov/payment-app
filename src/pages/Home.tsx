import { FC } from "react";
import { SectionPayment, SectionPromocode } from "src/widgets";

const HomePage: FC = () => {
  return (
    <>
      <SectionPayment />
      <SectionPromocode />
    </>
  );
};

export default HomePage;
