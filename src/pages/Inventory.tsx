import { useContext } from "react";
import InventoryTable from "../components/inventory/InventoryTable";
import Pagination from "../components/pagination/Pagination";
import { DataContext } from "../context/DataContext";

export default function Inventory() {
  const {
    handleEditProduct,
    editedInventory,
    editedInventoryIds,
    setFlag,
    setEditedInventoryIds,
  } = useContext(DataContext);

  const handleSave = () => {
    if (editedInventory && editedInventoryIds) {
      editedInventoryIds.forEach((id) => {
        const formData = editedInventory[id];
        if (formData) {
          handleEditProduct?.(id, formData);
        }
      });
      ///set btn disable and inputs become table cells
      setFlag?.(true);
      setEditedInventoryIds?.([]);
    }
  };

  return (
    <>
      <div className="flex flex-col px-14 py-12 gap-y-16">
        <div className="flex justify-between">
          <p className="font-semibold">مدیریت موجودی و قیمت ها</p>
          <button
            className="btn btn-wide rounded-lg bg-green-600 text-white"
            onClick={handleSave}
            disabled={editedInventoryIds?.length === 0}
          >
            ذخیره
          </button>
        </div>
        <div className="bg-[#102C57] p-5 rounded-2xl flex flex-col gap-y-3">
          <div className="bg-[#FEFAF6] p-3 rounded-2xl">
            <InventoryTable />
          </div>
          <div className="flex justify-center">
            <Pagination />
          </div>
        </div>
      </div>
    </>
  );
}
