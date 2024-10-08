export interface Order {
  _id: string;
  user: string;
  totalAmount: string;
  orderDate: string;
}

export interface Product {
  _id: string;
  name: string;
  price: number;
  quantity: number;
}

export interface Inventory {
  _id: string;
  name: string;
  price: number;
  quantity: number;
}

export interface Column<T> {
  key: keyof T;
  label: string;
  render?: (item: T) => React.ReactNode;
}

export interface Action<T> {
  label: string;
  className: string;
  handler: (item: T) => void;
}

export interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
  actions?: Action<T>[];
}
