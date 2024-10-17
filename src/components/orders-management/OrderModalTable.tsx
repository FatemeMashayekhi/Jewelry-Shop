import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

export default function OrderModalTable() {
  const { orderModalItem } = useContext(DataContext);
  const productsArray = orderModalItem?.products;
  return (
    <div className="overflow-x-auto font-semibold">
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>کالا</th>
            <th>قیمت</th>
            <th>تعداد</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {productsArray?.map((product, index) => (
            <tr key={product._id}>
              <th>{index + 1}</th>
              <td>{product.product.name}</td>
              <td>{product.product.price}</td>
              <td>{product.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
