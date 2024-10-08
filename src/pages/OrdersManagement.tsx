import { useContext } from "react";
import Radio from "../components/orders-management/Radio";
import Pagination from "../components/pagination/Pagination";
import { DataContext } from "../context/DataContext";
import Table from "../components/table/Table";
import { Action, Column } from "../models/TableModel";
import { OrdersEntity } from "../models/GetOrdersModel";

export default function OrdersManagement() {
  const { getAllOrders } = useContext(DataContext);

  const orderColumns: Column<OrdersEntity>[] = [
    {
      key: "user",
      label: "نام کاربر",
      render: (item) => `${item.user.lastname} ${item.user.firstname}`,
    },
    { key: "totalPrice", label: "مجموع مبلغ" },
    {
      key: "createdAt",
      label: "زمان ثبت سفارش",
      render: (item) => new Date(item.createdAt).toISOString().slice(0, 10),
    },
  ];

  const orderActions: Action<OrdersEntity>[] = [
    {
      label: "بررسی سفارش",
      className: "bg-blue-500 text-white",
      handler: (item) => console.log("Review order", item),
    },
  ];

  return (
    <>
      <div className="flex flex-col px-14 py-12 gap-y-16">
        <div className="flex justify-between items-center">
          <p className="font-semibold">مدیریت سفارش ها</p>
          <Radio />
        </div>
        <div className="bg-[#102C57] p-5 rounded-2xl flex flex-col gap-y-3">
          <div className="bg-[#FEFAF6] p-3 rounded-2xl">
            <Table
              columns={orderColumns}
              data={getAllOrders?.data || []}
              actions={orderActions}
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
