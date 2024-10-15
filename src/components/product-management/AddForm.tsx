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
  watch,
}) => (
  <div className="flex items-center gap-x-3">
    <label className="block mb-2 text-sm text-gray-900">{label}</label>
    <select
      className="select select-bordered w-full max-w-xs rounded-lg bg-white"
      {...register(name, validation)}
      value={watch(name) as string}
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
  const [categories, setCategories] = useState<AddFormCategory[]>([]);
  const [subCategories, setSubCategories] = useState<SubCategory[]>([]);

  const {
    handlePostNewProduct,
    getAllCategories,
    getAllSubCategories,
    setOpenAdd,
    editedProduct,
    handleEditProduct,
    setEditedProduct,
  } = useContext(DataContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<FormDataTypes>();

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
      if (key === "thumbnail" && value.length > 0) {
        formData.append(key, value[0]);
      } else if (key === "images" && value.length > 0) {
        Array.from(value).forEach((image) => formData.append(key, image));
      } else {
        if (key !== "thumbnail" && key !== "images") {
          formData.append(key, value.toString());
        }
      }
    });
    formData.append("description", description);

    if (editedProduct && handleEditProduct) {
      handleEditProduct(editedProduct._id, formData);
      if (setEditedProduct) {
        setEditedProduct(null);
      }
    } else if (handlePostNewProduct) {
      handlePostNewProduct(formData);
    } else {
      console.error("handlePostNewProduct is undefined");
    }
    if (setOpenAdd !== undefined) {
      setOpenAdd(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
      })}
      className="grid grid-cols-2 gap-x-8 gap-y-3 font-bold"
    >
      <div className="flex flex-col gap-y-2">
        <InputField
          label="نام کالا"
          type="text"
          register={register}
          errors={errors}
          name="name"
          validation={{ required: "وارد کردن نام کالا الزامی است" }}
        />
        <SelectField
          label="دسته بندی"
          register={register}
          errors={errors}
          name="category"
          options={categories}
          validation={{ required: "وارد کردن دسته بندی الزامی است" }}
          watch={watch}
        />
        <SelectField
          label="زیر مجموعه"
          register={register}
          errors={errors}
          name="subcategory"
          options={subCategories}
          validation={{ required: "وارد کردن زیر مجموعه الزامی است" }}
          watch={watch}
        />
      </div>
      <div className="flex flex-col gap-y-2">
        <InputField
          label="تعداد"
          type="number"
          register={register}
          errors={errors}
          name="quantity"
          validation={{ required: "وارد کردن تعداد الزامی است" }}
        />
        <InputField
          label="قیمت"
          type="number"
          register={register}
          errors={errors}
          name="price"
          validation={{ required: "وارد کردن قیمت الزامی است" }}
        />
        <InputField
          label="تخفیف"
          type="number"
          register={register}
          errors={errors}
          name="discount"
          validation={{ required: "وارد کردن تخفیف الزامی است" }}
        />
        <InputField
          label="برند"
          type="text"
          register={register}
          errors={errors}
          name="brand"
          validation={{ required: "وارد کردن برند الزامی است" }}
        />
      </div>
      <div className="col-span-2 flex gap-3">
        <label className="flex flex-col items-center gap-2">
          تصویر بند انگشتی
          <input
            type="file"
            className="file-input file-input-bordered w-full max-w-xs bg-white rounded-lg"
            {...register("thumbnail")}
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
            {...register("images")}
          />
          {errors.images && (
            <p className="text-red-500 mt-3">{errors.images.message}</p>
          )}
        </label>
      </div>
      <div className="col-span-2 flex flex-col gap-y-3">
        <Editor
          description={description}
          setDescription={setDescription}
          required={true}
        />
      </div>

      <button
        type="submit"
        className="btn bg-[#102C57] text-white rounded-lg w-[90%] hover:bg-[#305fac] focus:ring-2 focus:ring-[#102C57]"
      >
        {editedProduct ? "ویرایش" : "ذخیره"}
      </button>
    </form>
  );
}
