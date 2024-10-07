import { useForm } from "react-hook-form";
import Editor from "./Editor";
import { useContext, useState, useEffect } from "react";
import {
  FormDataTypes,
  InputFieldProps,
  SelectFieldProps,
  SubCategory,
} from "../../models/AddFormModel";
import { DataContext } from "../../context/DataContext";
import { Category as AddFormCategory } from "../../models/AddFormModel";
import {
  Category as ContextCategory,
  SubcategoriesEntity,
} from "../../models/DataContextModel";

const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  register,
  errors,
  name,
  validation,
}) => (
  <div>
    <label className="flex items-center gap-2 w-[90%]">
      {label}
      <input
        type={type}
        className={`border-[1px] border-gray-300 p-2 rounded-lg focus:border-[#102C57] focus:outline-none grow ${
          errors[name] ? "border-red-500" : "border-gray-300"
        }`}
        {...register(name, validation)}
      />
    </label>
    {errors[name] && (
      <p className="text-red-500 mt-3">{errors[name]?.message}</p>
    )}
  </div>
);

const SelectField: React.FC<SelectFieldProps> = ({
  label,
  register,
  errors,
  name,
  options,
  validation,
}) => (
  <div className="flex items-center gap-x-3">
    <label className="block mb-2 text-sm text-gray-900">{label}</label>
    <select
      className="select select-bordered w-full max-w-xs rounded-lg bg-white"
      {...register(name, validation)}
    >
      {options.map((option) => (
        <option key={option.id} value={option.id}>
          {option.name}
        </option>
      ))}
    </select>
    {errors[name] && (
      <p className="text-red-500 mt-3">{errors[name]?.message}</p>
    )}
  </div>
);

export default function AddForm() {
  const [description, setDescription] = useState("");
  const {
    handlePostNewProduct,
    getAllCategories,
    getAllSubCategories,
    setOpenAdd,
    editedProduct,
    handleEditProduct,
  } = useContext(DataContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormDataTypes>();

  const [categories, setCategories] = useState<AddFormCategory[]>([]);
  const [subCategories, setSubCategories] = useState<SubCategory[]>([]);

  useEffect(() => {
    if (editedProduct) {
      setValue("name", editedProduct.name);
      setValue("category", editedProduct.category._id);
      setValue("subcategory", editedProduct.subcategory._id);
      setValue("quantity", editedProduct.quantity);
      setValue("price", editedProduct.price);
      setValue("discount", editedProduct.discount);
      setValue("brand", editedProduct.brand);
      setDescription(editedProduct.description);
    }
  }, [editedProduct, setValue]);

  useEffect(() => {
    if (Array.isArray(getAllCategories?.data)) {
      setCategories(
        getAllCategories.data.map((category: ContextCategory) => ({
          id: category._id,
          name: category.name,
        }))
      );
    }
  }, [getAllCategories]);

  useEffect(() => {
    if (Array.isArray(getAllSubCategories?.data)) {
      setSubCategories(
        getAllSubCategories.data.map((subCategory: SubcategoriesEntity) => ({
          id: subCategory._id,
          name: subCategory.name,
        }))
      );
    }
  }, [getAllSubCategories]);

  const onSubmit = (data: FormDataTypes) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (
        key === "thumbnail" &&
        value instanceof FileList &&
        value.length > 0
      ) {
        formData.append(key, value[0]);
      } else if (
        key === "images" &&
        value instanceof FileList &&
        value.length > 0
      ) {
        Array.from(value).forEach((image) => formData.append(key, image));
      } else {
        formData.append(key, value.toString());
      }
    });
    formData.append("description", description);

    // formData.forEach((value, key) => {
    //   console.log(`${key}: ${value}`);
    // });

    if (editedProduct && handleEditProduct) {
      handleEditProduct(editedProduct._id, formData); // Call handleEditProduct in edit mode
    } else if (handlePostNewProduct) {
      handlePostNewProduct(formData); // Pass formData to handlePostNewProduct
    } else {
      console.error("handlePostNewProduct is undefined");
    }
    if (setOpenAdd !== undefined) {
      setOpenAdd(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-2 gap-x-8 gap-y-3 font-bold"
    >
      <div className="flex flex-col gap-y-2">
        <InputField
          label="نام کالا"
          type="text"
          register={register}
          errors={errors}
          name="name"
          validation={{ required: "name is required" }}
        />
        <SelectField
          label="دسته بندی"
          register={register}
          errors={errors}
          name="category"
          options={categories}
          validation={{ required: "category field is required" }}
        />
        <SelectField
          label="زیر مجموعه"
          register={register}
          errors={errors}
          name="subcategory"
          options={subCategories}
          validation={{ required: "subcategory field is required" }}
        />
      </div>
      <div className="flex flex-col gap-y-2">
        <InputField
          label="تعداد"
          type="number"
          register={register}
          errors={errors}
          name="quantity"
          validation={{ required: "quantity is required" }}
        />
        <InputField
          label="قیمت"
          type="number"
          register={register}
          errors={errors}
          name="price"
          validation={{ required: "price is required" }}
        />
        <InputField
          label="تخفیف"
          type="number"
          register={register}
          errors={errors}
          name="discount"
          validation={{ required: "discount is required" }}
        />
        <InputField
          label="برند"
          type="text"
          register={register}
          errors={errors}
          name="brand"
          validation={{ required: "brand is required" }}
        />
      </div>
      <div className="col-span-2 flex gap-3">
        <label className="flex flex-col items-center gap-2">
          تصویر بند انگشتی
          <input
            type="file"
            className="file-input file-input-bordered w-full max-w-xs bg-white rounded-lg"
            {...register("thumbnail", { required: "thumbnail is required" })}
          />
          {errors.thumbnail && (
            <p className="text-red-500 mt-3">{errors.thumbnail.message}</p>
          )}
        </label>
        <label className="flex flex-col items-center gap-2">
          تصاویر
          <input
            type="file"
            className="file-input file-input-bordered w-full max-w-xs bg-white rounded-lg"
            multiple
            {...register("images", { required: "images is required" })}
          />
          {errors.images && (
            <p className="text-red-500 mt-3">{errors.images.message}</p>
          )}
        </label>
      </div>
      <div className="col-span-2 flex flex-col gap-y-3">
        <Editor description={description} setDescription={setDescription} />
      </div>

      {editedProduct ? (
        <button
          type="submit"
          className="btn bg-[#102C57] text-white rounded-lg w-[90%] hover:bg-[#305fac] focus:ring-2 focus:ring-[#102C57]"
        >
          ویرایش
        </button>
      ) : (
        <button
          type="submit"
          className="btn bg-[#102C57] text-white rounded-lg w-[90%] hover:bg-[#305fac] focus:ring-2 focus:ring-[#102C57]"
        >
          ذخیره
        </button>
      )}
    </form>
  );
}
