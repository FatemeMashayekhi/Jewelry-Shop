import { Icon } from "@iconify/react";
import OrderDetails from "../orders-management/OrderDetails";
import OrderModalTable from "../orders-management/OrderModalTable";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import DateConverter from "../dateConverter/DateConverter";

export default function OrderModal() {
  const {
    openOrderModal,
    setOpenOrderModal,
    handleUpdateOrderStatus,
    orderModalItem,
  } = useContext(DataContext);

  const status = !!orderModalItem?.deliveryStatus;

  return (
    openOrderModal && (
      <div
        id="myModal"
        className="fixed z-10 pt-24 left-0 top-0 w-full h-full overflow-auto bg-black bg-opacity-50"
      >
        <div
          id="modal-content"
          className="relative bg-white m-auto p-6 border border-gray-400 w-2/5 shadow-lg animate-slide-in rounded-lg"
        >
          <div id="modal-header" className="flex justify-between">
            <div className="flex gap-x-2 font-bold">
              <p className="text-lg">نمایش سفارش</p>
            </div>
            <button id="close" className="text-2xl cursor-pointer">
              <Icon
                icon="material-symbols:cancel-outline"
                className="text-black hover:text-red-500"
                onClick={() => setOpenOrderModal && setOpenOrderModal(false)}
              />
            </button>
          </div>
          <div id="modal-body" className="px-4 py-5 flex flex-col gap-y-6">
            <OrderDetails />
            <OrderModalTable />
            {status ? (
              <div className="flex gap-x-2 font-semibold justify-center items-center">
                <p>تاریخ تحویل :</p>
                <p>
                  {orderModalItem?.deliveryDate
                    ? DateConverter(orderModalItem.deliveryDate)
                    : ""}
                </p>
              </div>
            ) : (
              <button
                className="btn btn-xs rounded-lg bg-green-700 text-white sm:btn-sm md:btn-md lg:btn-lg"
                onClick={() =>
                  orderModalItem?._id &&
                  handleUpdateOrderStatus &&
                  handleUpdateOrderStatus(orderModalItem._id)
                }
              >
                تحویل شد
              </button>
            )}
          </div>
        </div>
      </div>
    )
  );
}
