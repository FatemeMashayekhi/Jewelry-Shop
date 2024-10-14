import { SubmitHandler, useForm } from "react-hook-form";

interface IFormInput {
  firstname: string;
  lastname: string;
  address: string;
  phoneNumber: string;
}
export default function PaymentForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    defaultValues: {
      firstname: "مارال",
      lastname: "مشایخی",
      address: "تهران",
      phoneNumber: "09126163965",
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-x-4 gap-y-5 items-center font-semibold p-4"
      >
        <div>
          <label className="block mb-2">نام :</label>
          <input
            {...register("firstname", {
              required: "Name is required",
              minLength: { value: 2, message: "Minimum length is 2" },
            })}
            className="border p-2 w-60 rounded-lg"
          />
          {errors.firstname && (
            <span className="text-red-500">{errors.firstname.message}</span>
          )}
        </div>

        <div>
          <label className="block mb-2">نام خانوادگی :</label>
          <input
            {...register("lastname", {
              required: "Last Name is required",
              minLength: { value: 2, message: "Minimum length is 2" },
            })}
            className="border p-2 w-60 rounded-lg"
          />
          {errors.lastname && (
            <span className="text-red-500">{errors.lastname.message}</span>
          )}
        </div>

        <div>
          <label className="block mb-2">آدرس :</label>
          <textarea
            {...register("address", { required: "Address is required" })}
            className="border p-2 w-60 rounded-lg"
          />
          {errors.address && (
            <span className="text-red-500">{errors.address.message}</span>
          )}
        </div>

        <div>
          <label className="block mb-2">تلفن همراه :</label>
          <input
            {...register("phoneNumber", {
              required: "Phone Number is required",
              pattern: {
                value: /^[0-9]+$/,
                message: "Phone Number must contain only numbers",
              },
            })}
            className="border p-2 w-60 rounded-lg"
          />
          {errors.phoneNumber && (
            <span className="text-red-500">{errors.phoneNumber.message}</span>
          )}
        </div>

        <button
          type="submit"
          className="btn bg-green-700 text-white py-2 px-4 w-60 rounded-lg"
        >
          پرداخت
        </button>
      </form>
    </>
  );
}
