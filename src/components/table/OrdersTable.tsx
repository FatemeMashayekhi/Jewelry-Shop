import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

export default function OrdersTable() {
  const { orders } = useContext(DataContext);
  return (
    <div className="overflow-x-auto">
      <table className="table font-bold text-lg">
        {/* head */}
        <thead>
          <tr className="text-lg">
            <th>نام کاربر</th>
            <th>مجموع مبلغ</th>
            <th>زمان ثبت سفارش</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {Array.isArray(orders) &&
            orders.map((item) => (
              <tr key={item._id}>
                <th>
                  {item.user.lastname} {item.user.firstname}
                </th>
                <td>{item.totalPrice}</td>
                <td>{new Date(item.createdAt).toISOString().slice(0, 10)}</td>
                <td>
                  <div className="join rounded-lg">
                    <button className="btn join-item bg-blue-500 text-white">
                      بررسی سفارش
                    </button>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
