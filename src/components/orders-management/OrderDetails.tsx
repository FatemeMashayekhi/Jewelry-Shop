import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import DateConverter from "../dateConverter/DateConverter";

export default function OrderDetails() {
  const { orderModalItem } = useContext(DataContext);

  return (
    <div className="font-semibold flex flex-col gap-y-3">
      <div className="flex gap-x-2">
        <p>نام مشتری :</p>
        <p>{orderModalItem?.user.firstname}</p>
        <p>{orderModalItem?.user.lastname}</p>
      </div>
      <div className="flex gap-x-2">
        <p>آدرس :</p>
        <p>{orderModalItem?.user.address}</p>
      </div>
      <div className="flex gap-x-2">
        <p>تلفن :</p>
        <p>{orderModalItem?.user.phoneNumber}</p>
      </div>
      <div className="flex gap-x-2">
        <p>تاریخ تحویل :</p>
        <p>
          {orderModalItem?.deliveryDate
            ? DateConverter(orderModalItem.deliveryDate)
            : ""}
        </p>
      </div>
      <div className="flex gap-x-2">
        <p>تاریخ سفارش :</p>
        <p>
          {orderModalItem?.createdAt
            ? DateConverter(orderModalItem.createdAt)
            : ""}
        </p>
      </div>
    </div>
  );
}
