import { Icon } from "@iconify/react";
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
          <div id="modal-header" className="flex justify-between">
            <div className="flex gap-x-2 font-bold">
              <p className="text-lg">حذف کالا</p>
            </div>
            <button id="close" className="text-2xl cursor-pointer">
              <Icon
                icon="material-symbols:cancel-outline"
                className="text-black hover:text-red-500"
                onClick={() => setOpenDelete && setOpenDelete(false)}
              />
            </button>
          </div>
          <div id="modal-body" className="px-4 py-5">
            <p>آیا از حذف محصول اطمینان دارید؟</p>
            <div>
              <button
                className="btn btn-success"
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
                بله
              </button>
              <button
                className="btn btn-error"
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
