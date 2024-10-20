import { SortType, SortEnum } from "src/entities/models/sort";

export const sortList: SortType[] = [
  {
    name: "Date ASC",
    value: SortEnum.DateASC
  },
  {
    name: "Date DESC",
    value: SortEnum.AmountDESC
  },
  {
    name: "Price ASC",
    value: SortEnum.AmountASC
  },
  {
    name: "Price DESC",
    value: SortEnum.AmountDESC
  }
];
