export enum SortEnum {
  DateASC = "date-asc",
  DateDESC = "date-desc",
  AmountASC = "amount-asc",
  AmountDESC = "amount-desc"
}

export type SortType = {
  name: string;
  value: SortEnum;
};
