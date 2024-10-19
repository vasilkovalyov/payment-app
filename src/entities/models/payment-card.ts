export interface IPaymentCard {
  id: string;
  image: string;
  title: string;
  commission: number;
  popular?: boolean;
  trusted?: boolean;
}
