export interface IList {
  trips: ILIstItem[]
}
export interface ILIstItem {
  id: string;
  city: string;
  url: string | undefined;
  startDate: string;
  endDate: string;
}

export interface IListSlice {
  trips: ILIstItem[],
  sortBy: string
}
export interface IDB {
  city: string,
  url: string
}
