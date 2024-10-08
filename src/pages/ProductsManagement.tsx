import { useContext } from "react";
import Pagination from "../components/pagination/Pagination";
import { DataContext } from "../context/DataContext";
import AddProduct from "../components/modals/AddProduct";
import DeleteProduct from "../components/modals/DeleteProduct";
import Table from "../components/table/Table";
import { Action, Column } from "../models/TableModel";
import { ProductsEntity } from "../models/GetProductsModel";

export default function ProductsManagement() {
  const { setOpenAdd, getAllProducts } = useContext(DataContext);

  const productColumns: Column<ProductsEntity>[] = [
    {
      key: "thumbnail",
      label: "تصویر",
      render: (item) => (
        <img
          src={`http://localhost:8000/images/products/thumbnails/${item.thumbnail}`}
          alt={item._id}
          className="size-20 rounded-lg"
        />
      ),
    },
    { key: "name", label: "نام کالا" },
    {
      key: "category",
      label: "دسته بندی",
      render: (item) => item.category.name,
    },
  ];

  const productActions: Action<ProductsEntity>[] = [
    {
      label: "ویرایش",
      className: "bg-blue-500 text-white",
      handler: (item) => console.log("Edit product", item),
    },
    {
      label: "حذف",
      className: "bg-red-600 text-white",
      handler: (item) => console.log("Delete product", item._id),
    },
  ];

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
            <Table
              columns={productColumns}
              data={getAllProducts?.data || []}
              actions={productActions}
            />
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
