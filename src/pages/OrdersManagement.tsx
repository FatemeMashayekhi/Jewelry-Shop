import Radio from "../components/orders-management/Radio";
import OrdersPagination from "../components/pagination/OrdersPagination";
import OrdersTable from "../components/table/OrdersTable";

export default function OrdersManagement() {
  return (
    <>
      <div className="flex flex-col px-14 py-12 gap-y-16">
        <div className="flex justify-between items-center">
          <p className="font-semibold">مدیریت سفارش ها</p>
          <Radio />
        </div>
        <div className="bg-[#102C57] p-5 rounded-2xl flex flex-col gap-y-3">
          <div className="bg-[#FEFAF6] p-3 rounded-2xl">
            <OrdersTable />
          </div>
          <div className="flex justify-center">
            <OrdersPagination />
          </div>
        </div>
      </div>
    </>
  );
}
