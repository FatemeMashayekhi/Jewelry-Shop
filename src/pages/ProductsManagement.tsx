import Pagination from "../components/product-management/Pagination";
import Table from "../components/product-management/Table";

export default function ProductsManagement() {
  return (
    <>
      <div className="flex flex-col px-14 py-12 gap-y-16">
        <div className="flex justify-between items-center">
          <p className="font-semibold">مدیریت کالاها</p>
          <button className="btn btn-wide rounded-lg bg-green-600 text-white">
            افزودن کالا
          </button>
        </div>
        <div className="bg-[#102C57] p-10 rounded-2xl">
          <div className="p-10 rounded-2xl">
            <div className="bg-[#FEFAF6] p-10 rounded-2xl">
              <Table />
              <div className="flex justify-center">
                <Pagination />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
