import { TransactionStatus } from "src/entities/models/transaction-status";
import { AppColors } from "./themes";

export const TransactionStatusColor: Record<TransactionStatus, AppColors> = {
  [TransactionStatus.Active]: AppColors.Green,
  [TransactionStatus.Performed]: AppColors.Blue,
  [TransactionStatus.Processing]: AppColors.Orange
};
