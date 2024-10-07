import InventoryPagination from "../components/inventory/InventoryPagination";
import InventoryTable from "../components/inventory/InventoryTable";

export default function Inventory() {
  return (
    <>
      <div className="flex flex-col px-14 py-12 gap-y-16">
        <div className="flex justify-between">
          <p className="font-semibold">مدیریت موجودی و قیمت ها</p>
          <button className="btn btn-wide rounded-lg bg-green-600 text-white">
            ذخیره
          </button>
        </div>
        <div className="bg-[#102C57] p-5 rounded-2xl flex flex-col gap-y-3">
          <div className="bg-[#FEFAF6] p-3 rounded-2xl">
            <InventoryTable />
          </div>
          <div className="flex justify-center">
            <InventoryPagination />
          </div>
        </div>
      </div>
    </>
  );
}
