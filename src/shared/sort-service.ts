import { SortEnum } from "src/entities/models/sort";

type CommonSortProps = {
  date: string;
  amount: number;
};

interface ISort<T extends CommonSortProps> {
  sortByDateAsc: (items: T[]) => T[];
  sortByDateDesc: (items: T[]) => T[];
  sortByAmountAsc: (items: T[]) => T[];
  sortByAmountDesc: (items: T[]) => T[];
}

export class SortService<T extends CommonSortProps> implements ISort<T> {
  sortByDateAsc(items: T[]): T[] {
    return items.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );
  }
  sortByDateDesc(items: T[]): T[] {
    return items.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }
  sortByAmountAsc(items: T[]): T[] {
    return items.sort((a, b) => a.amount - b.amount);
  }
  sortByAmountDesc(items: T[]): T[] {
    return items.sort((a, b) => b.amount - a.amount);
  }

  getSortedData(items: T[], sortType: SortEnum): T[] {
    let sortedArray: T[] = [];
    switch (sortType) {
      case SortEnum.AmountASC: {
        sortedArray = this.sortByAmountAsc(items);
        break;
      }
      case SortEnum.AmountDESC: {
        sortedArray = this.sortByAmountDesc(items);
        break;
      }
      case SortEnum.DateASC: {
        sortedArray = this.sortByDateAsc(items);
        break;
      }
      case SortEnum.DateDESC: {
        sortedArray = this.sortByDateDesc(items);
        break;
      }
      default:
        sortedArray = items;
    }

    return sortedArray;
  }
}

export const sortServiceInst = new SortService();
