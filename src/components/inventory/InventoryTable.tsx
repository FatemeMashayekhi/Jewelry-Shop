import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

export default function InventoryTable() {
  const { getAllProducts } = useContext(DataContext);
  console.log(getAllProducts?.data);
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
          {Array.isArray(getAllProducts?.data) &&
            getAllProducts?.data.map((item) => (
              <tr key={item._id}>
                <th>{item.name}</th>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
