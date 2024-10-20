import { TransactionStatus } from "./transaction-status";

export interface ITransaction {
  id: string;
  image: string;
  title: string;
  number: string;
  date: string;
  amount: number;
  status: TransactionStatus;
}
