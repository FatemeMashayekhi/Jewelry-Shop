import { useContext } from "react";
import Pagination from "../components/pagination/Pagination";
import { DataContext } from "../context/DataContext";
import Table from "../components/table/Table";
import { Column } from "../models/TableModel";
import { ProductsEntity } from "../models/GetProductsModel";

export default function Inventory() {
  const { getAllProducts } = useContext(DataContext);

  const inventoryColumns: Column<ProductsEntity>[] = [
    { key: "name", label: "کالا" },
    { key: "price", label: "قیمت" },
    { key: "quantity", label: "موجودی" },
  ];
  return (
    <>
      <div className="flex flex-col px-14 py-12 gap-y-16">
        <div className="flex justify-between">
          <p className="font-semibold">مدیریت موجودی و قیمت ها</p>
          <button className="btn btn-wide rounded-lg bg-green-600 text-white">
            ذخیره
          </button>
        </div>
        <div className="bg-[#102C57] p-5 rounded-2xl flex flex-col gap-y-3">
          <div className="bg-[#FEFAF6] p-3 rounded-2xl">
            <Table
              columns={inventoryColumns}
              data={getAllProducts?.data || []}
            />
          </div>
          <div className="flex justify-center">
            <Pagination />
          </div>
        </div>
      </div>
    </>
  );
}
