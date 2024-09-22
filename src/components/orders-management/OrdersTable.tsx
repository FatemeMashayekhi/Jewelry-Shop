export default function OrdersTable() {
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
          <tr>
            <th>مارال مشایخی</th>
            <td>920.000</td>
            <td>1399.1.5</td>
            <td>
              <div className="join rounded-lg">
                <button className="btn join-item bg-blue-500 text-white">
                  بررسی سفارش
                </button>
              </div>
            </td>
          </tr>
          {/* row 2 */}
          <tr>
            <th>مارال مشایخی</th>
            <td>920.000</td>
            <td>1399.1.5</td>
            <td>
              <div className="join rounded-lg">
                <button className="btn join-item bg-blue-500 text-white">
                  بررسی سفارش
                </button>
              </div>
            </td>
          </tr>
          {/* row 3 */}
          <tr>
            <th>مارال مشایخی</th>
            <td>920.000</td>
            <td>1399.1.5</td>
            <td>
              <div className="join rounded-lg">
                <button className="btn join-item bg-blue-500 text-white">
                  بررسی سفارش
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
