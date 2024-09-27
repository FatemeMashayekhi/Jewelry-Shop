import { useForm } from "react-hook-form";

type FormData = {
  username: string;
  password: string;
  shotFirst: string;
  file: FileList;
  number: number;
};

export default function AddForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("first");
    const formData = new FormData();
    formData.append("username", data.username);
    formData.append("password", data.password);
    formData.append("shotFirst", data.shotFirst);
    if (data.file && data.file[0]) formData.append("file", data.file[0]);
    formData.append("number", data.number.toString());

    // Log the contents of FormData
    for (const [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-6">
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-900">
          دسته بندی
        </label>
        <select
          className="select select-bordered w-full max-w-xs"
          {...register("shotFirst", { required: "This field is required" })}
        >
          <option disabled value="">
            دسته بندی
          </option>
          <option value="Han Solo">Han Solo</option>
          <option value="Greedo">Greedo</option>
        </select>
        {errors.shotFirst && (
          <p className="text-red-500 mt-3">{errors.shotFirst.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-900">
          زیر مجموعه
        </label>
        <select
          className="select select-bordered w-full max-w-xs"
          {...register("shotFirst", { required: "This field is required" })}
        >
          <option disabled value="">
            زیر مجموعه
          </option>
          <option value="Han Solo">Han Solo</option>
          <option value="Greedo">Greedo</option>
        </select>
        {errors.shotFirst && (
          <p className="text-red-500 mt-3">{errors.shotFirst.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="flex items-center gap-2">
          <input
            type="text"
            className="border-b-2 border-gray-300 p-2 focus:border-[#102C57] focus:outline-none grow"
            placeholder="نام کاربری"
            {...register("username", { required: "Username is required" })}
          />
        </label>
        {errors.username && (
          <p className="text-red-500 mt-3">{errors.username.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="flex items-center gap-2">
          <input
            type="password"
            className="border-b-2 border-gray-300 p-2 focus:border-[#102C57] focus:outline-none grow"
            placeholder="رمز عبور"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
              pattern: {
                value: /^(?=.*[a-zA-Z])(?=.*\d)/,
                message: "Password must contain both letters and numbers",
              },
            })}
          />
        </label>
        {errors.password && (
          <p className="text-red-500 mt-3">{errors.password.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-900">
          Upload file
        </label>
        <input
          type="file"
          className="file-input file-input-bordered w-full max-w-xs"
          {...register("file", { required: "File is required" })}
        />
        {errors.file && (
          <p className="text-red-500 mt-3">{errors.file.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-900">
          Number
        </label>
        <input
          type="number"
          className="grow border-b-2 border-gray-300 p-2 focus:border-[#102C57] focus:outline-none"
          {...register("number", { required: "Number is required" })}
        />
        {errors.number && (
          <p className="text-red-500 mt-3">{errors.number.message}</p>
        )}
      </div>
      <button type="submit" className="btn bg-[#102C57] text-white">
        ورود
      </button>
    </form>
  );
}
