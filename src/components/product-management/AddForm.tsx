import { useForm } from "react-hook-form";
import Editor from "./Editor";
import { useState } from "react";
import {
  FormDataTypes,
  InputFieldProps,
  SelectFieldProps,
} from "../../models/AddFormModel";

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
        className={`border-2 border-gray-300 p-2 rounded-lg focus:border-[#102C57] focus:outline-none grow ${
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
        <option key={option} value={option}>
          {option}
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
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataTypes>();

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

    for (const [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-y-6 font-bold"
    >
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
        options={["گردنبند", "دستبند", "انگشتر", "گوشواره"]}
        validation={{ required: "category field is required" }}
      />
      <SelectField
        label="زیر مجموعه"
        register={register}
        errors={errors}
        name="subcategory"
        options={["پنتره", "گرین", "ژوست", "لاو", "روند"]}
        validation={{ required: "subcategory field is required" }}
      />
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
      <input
        type="file"
        className="file-input file-input-bordered w-full max-w-xs bg-white rounded-lg"
        {...register("thumbnail", { required: "thumbnail is required" })}
      />
      {errors.thumbnail && (
        <p className="text-red-500 mt-3">{errors.thumbnail.message}</p>
      )}
      <input
        type="file"
        className="file-input file-input-bordered w-full max-w-xs bg-white rounded-lg"
        multiple
        {...register("images", { required: "images is required" })}
      />
      {errors.images && (
        <p className="text-red-500 mt-3">{errors.images.message}</p>
      )}
      <Editor description={description} setDescription={setDescription} />
      <div className="flex justify-center">
        <button
          type="submit"
          className="btn bg-[#102C57] text-white rounded-lg w-[90%] hover:bg-[#305fac] focus:ring-2 focus:ring-[#102C57]"
        >
          ذخیره
        </button>
      </div>
    </form>
  );
}
