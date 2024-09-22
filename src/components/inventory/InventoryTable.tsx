export default function InventoryTable() {
  return (
    <div className="overflow-x-auto">
      <table className="table font-bold text-lg">
        {/* head */}
        <thead>
          <tr className="text-lg">
            <th>کالا</th>
            <th>قیمت</th>
            <th>موجودی</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th>یریرسرر</th>
            <td>20.000</td>
            <td>100</td>
          </tr>
          {/* row 2 */}
          <tr>
            <th>یریرسرر</th>
            <td>20.000</td>
            <td>100</td>
          </tr>
          {/* row 3 */}
          <tr>
            <th>یریرسرر</th>
            <td>20.000</td>
            <td>100</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
