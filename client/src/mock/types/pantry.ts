export interface IPantryItem {
  id: number;
  name: string;
  amount: number;
}

export interface IPantry {
  id: number;
  items: IPantryItem[];
  owner: string;
}
