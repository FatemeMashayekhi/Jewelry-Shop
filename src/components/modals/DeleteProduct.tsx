import { useContext } from "react";
import { DataContext } from "../../context/context";

export default function DeleteProduct() {
  const { openDelete, setOpenDelete, handleDeleteProduct, deletedProductId } =
    useContext(DataContext);
  return (
    openDelete && (
      <div
        id="myModal"
        className="fixed z-10 pt-24 left-0 top-0 w-full h-full overflow-auto bg-black bg-opacity-50"
      >
        <div
          id="modal-content"
          className="relative bg-white m-auto p-6 border border-gray-400 w-2/5 shadow-lg animate-slide-in rounded-lg"
        >
          <div id="modal-header" className="flex justify-center">
            <p className="text-xl font-bold">حذف کالا</p>
          </div>
          <div
            id="modal-body"
            className="px-4 py-5 flex flex-col gap-y-5 justify-center items-center"
          >
            <p className="font-semibold">آیا از حذف محصول اطمینان دارید؟</p>
            <div className="flex gap-x-1">
              <button
                className="btn bg-[#102C57] text-white rounded-lg w-60 hover:bg-red-600"
                onClick={() => {
                  if (
                    deletedProductId &&
                    handleDeleteProduct &&
                    setOpenDelete
                  ) {
                    handleDeleteProduct(deletedProductId);
                    setOpenDelete(false);
                  }
                }}
              >
                بله ، حذف شود
              </button>
              <button
                className="btn btn-natural rounded-lg w-60"
                onClick={() => setOpenDelete && setOpenDelete(false)}
              >
                خیر
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
