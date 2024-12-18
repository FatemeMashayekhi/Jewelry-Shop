import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

export default function Table() {
  const { getAllProducts, deleteBtnHandler, editBtnHandler, editedProduct } =
    useContext(DataContext);
  console.log(editedProduct);
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
          {Array.isArray(getAllProducts?.data) &&
            getAllProducts?.data.map((item) => (
              <tr key={item._id}>
                <th>
                  <img
                    src={`http://localhost:8000/images/products/thumbnails/${item.thumbnail}`}
                    alt={item._id}
                    className="size-20 rounded-lg"
                  />
                </th>
                <td>{item.name}</td>
                <td>{item.category.name}</td>
                <td>
                  <div className="join rounded-lg">
                    <button
                      className="btn join-item bg-blue-500 text-white"
                      onClick={() => editBtnHandler && editBtnHandler(item)}
                    >
                      ویرایش
                    </button>
                    <button
                      className="btn join-item bg-red-600 text-white"
                      onClick={() =>
                        deleteBtnHandler && deleteBtnHandler(item._id)
                      }
                    >
                      حذف
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
