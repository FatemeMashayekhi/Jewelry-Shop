import { useContext, useEffect } from "react";
import { DataContext } from "../../context/DataContext";

export default function InventoryTable() {
  const {
    getAllProducts,
    setEditedInventory,
    setEditedInventoryIds,
    flag,
    setFlag,
  } = useContext(DataContext);

  ///set btn disable and inputs become table cells
  useEffect(() => {
    if (flag) {
      getAllProducts?.data?.forEach((item) => {
        ["price", "quantity"].forEach((field) => {
          const input = document.getElementById(
            `${field}-${item._id}`
          ) as HTMLInputElement;
          const span = document.getElementById(`${field}-span-${item._id}`);
          if (input && span) {
            input.classList.add("hidden");
            span.classList.remove("hidden");
          }
        });
      });

      setFlag?.(false);
    }
  }, [flag, getAllProducts?.data, setFlag]);

  const handleEdit = (id: string) => {
    document.getElementById(`price-${id}`)?.classList.remove("hidden");
    document.getElementById(`price-span-${id}`)?.classList.add("hidden");
  };

  const handleQuantityEdit = (id: string) => {
    document.getElementById(`quantity-${id}`)?.classList.remove("hidden");
    document.getElementById(`quantity-span-${id}`)?.classList.add("hidden");
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    id: string,
    field: "price" | "quantity"
  ) => {
    if (e.key === "Enter") {
      const input = document.getElementById(
        `${field}-${id}`
      ) as HTMLInputElement;

      const span = document.getElementById(`${field}-span-${id}`);
      if (input && span) {
        span.textContent = input.value;
        const formData = new FormData();
        formData.append(field, input.value);
        setEditedInventory?.((prev) => ({
          ...prev,
          [id]: { ...(prev[id] || {}), [field]: formData.get(field) },
        }));

        setEditedInventoryIds?.((prev) => {
          if (!prev.includes(id)) {
            return [...prev, id];
          }
          return prev;
        });
      }
    } else if (e.key === "Escape") {
      const input = document.getElementById(
        `${field}-${id}`
      ) as HTMLInputElement;

      const span = document.getElementById(`${field}-span-${id}`);

      if (input && span) {
        input.value = span.textContent ?? "0";
        input.classList.add("hidden");
        span.classList.remove("hidden");
      }
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="table font-bold text-lg">
        <thead>
          <tr className="text-lg">
            <th>کالا</th>
            <th>قیمت</th>
            <th>موجودی</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(getAllProducts?.data) &&
            getAllProducts.data.map((item) => (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>
                  <span
                    id={`price-span-${item._id}`}
                    onClick={() => handleEdit(item._id)}
                  >
                    {item.price}
                  </span>
                  <input
                    type="text"
                    defaultValue={item.price}
                    name="price"
                    id={`price-${item._id}`}
                    className="hidden"
                    onKeyDown={(e) => handleKeyDown(e, item._id, "price")}
                  />
                </td>
                <td>
                  <span
                    id={`quantity-span-${item._id}`}
                    onClick={() => handleQuantityEdit(item._id)}
                  >
                    {item.quantity}
                  </span>
                  <input
                    type="text"
                    defaultValue={item.quantity}
                    name="quantity"
                    id={`quantity-${item._id}`}
                    className="hidden"
                    onKeyDown={(e) => handleKeyDown(e, item._id, "quantity")}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
