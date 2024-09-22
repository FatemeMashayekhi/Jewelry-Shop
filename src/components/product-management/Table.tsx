export default function Table() {
  return (
    <div className="overflow-x-auto">
      <table className="table font-bold text-lg">
        {/* head */}
        <thead>
          <tr className="text-lg">
            <th>تصویر</th>
            <th>نام کالا</th>
            <th>دسته بندی</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th></th>
            <td>یرسریرسر</td>
            <td>دستبند</td>
            <td>
              <div className="join rounded-lg">
                <button className="btn join-item bg-blue-500 text-white">
                  ویرایش
                </button>
                <button className="btn join-item bg-red-600 text-white">
                  حذف
                </button>
              </div>
            </td>
          </tr>
          {/* row 2 */}
          <tr>
            <th></th>
            <td>یرسریرسر</td>
            <td>دستبند</td>
            <td>
              <div className="join rounded-lg">
                <button className="btn join-item bg-blue-500 text-white">
                  ویرایش
                </button>
                <button className="btn join-item bg-red-600 text-white">
                  حذف
                </button>
              </div>
            </td>
          </tr>
          {/* row 3 */}
          <tr>
            <th></th>
            <td>یرسریرسر</td>
            <td>دستبند</td>
            <td>
              <div className="join rounded-lg">
                <button className="btn join-item bg-blue-500 text-white">
                  ویرایش
                </button>
                <button className="btn join-item bg-red-600 text-white">
                  حذف
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
