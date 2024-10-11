export interface categoryById {
  status: string;
  data: Data;
}
export interface Data {
  category: CategoryByID;
}
export interface CategoryByID {
  _id: string;
  name: string;
  icon: string;
  createdAt: string;
  updatedAt: string;
  slugname: string;
  __v: number;
}
