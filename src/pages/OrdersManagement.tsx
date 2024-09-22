import OrdersPagination from "../components/orders-management/OrdersPagination";
import OrdersTable from "../components/orders-management/OrdersTable";
import Radio from "../components/orders-management/Radio";

export default function OrdersManagement() {
  return (
    <>
      <div className="flex flex-col px-14 py-12 gap-y-16">
        <div className="flex justify-between items-center">
          <p className="font-semibold">مدیریت سفارش ها</p>
          <Radio />
        </div>
        <div className="bg-[#102C57] p-10 rounded-2xl">
          <div className="p-10 rounded-2xl">
            <div className="bg-[#FEFAF6] p-10 rounded-2xl">
              <OrdersTable />
              <div className="flex justify-center">
                <OrdersPagination />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
