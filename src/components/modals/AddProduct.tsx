import { Icon } from "@iconify/react";
import { useContext } from "react";
import { DataContext } from "../../context/context";
import AddForm from "../product-management/AddForm";

export default function AddProduct() {
  const { openAdd, setOpenAdd, editedProduct } = useContext(DataContext);
  return (
    openAdd && (
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
              {editedProduct ? (
                <p className="text-lg">ویرایش کالا</p>
              ) : (
                <p className="text-lg">افزودن کالا</p>
              )}
            </div>
            <button
              onClick={() => {
                if (setOpenAdd) {
                  setOpenAdd(false);
                }
              }}
              id="close"
              className="text-2xl cursor-pointer"
            >
              <Icon
                icon="material-symbols:cancel-outline"
                className="text-black hover:text-red-500"
              />
            </button>
          </div>
          <div id="modal-body" className="px-4 py-5">
            <AddForm />
          </div>
        </div>
      </div>
    )
  );
}
