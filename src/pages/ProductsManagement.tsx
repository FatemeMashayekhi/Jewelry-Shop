import { useContext } from "react";
import Pagination from "../components/product-management/Pagination";
import Table from "../components/product-management/Table";
import { DataContext } from "../context/DataContext";
import AddProduct from "../components/modals/AddProduct";
import DeleteProduct from "../components/modals/DeleteProduct";

export default function ProductsManagement() {
  const { setOpenAdd } = useContext(DataContext);
  return (
    <>
      <div className="flex flex-col px-14 py-12 gap-y-16">
        <div className="flex justify-between items-center">
          <p className="font-semibold">مدیریت کالاها</p>
          <button
            onClick={() => {
              if (setOpenAdd) {
                setOpenAdd(true);
              }
            }}
            className="btn btn-wide rounded-lg bg-green-600 text-white"
          >
            افزودن کالا
          </button>
        </div>
        <div className="bg-[#102C57] p-5 rounded-2xl flex flex-col gap-y-3">
          <div className="bg-[#FEFAF6] p-3 rounded-2xl">
            <Table />
          </div>
          <div className="flex justify-center">
            <Pagination />
          </div>
        </div>
        <AddProduct />
        <DeleteProduct />
      </div>
    </>
  );
}
