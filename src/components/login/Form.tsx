import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

const schema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters long")
    .regex(
      /^(?=.*[a-zA-Z])(?=.*\d)/,
      "Password must contain both letters and numbers"
    ),
});

type FormData = z.infer<typeof schema>;

export default function Form() {
  const { handleLogin } = useContext(DataContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    handleLogin!(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-6">
      <div className="mb-4">
        <label className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input
            type="text"
            className="border-b-2 border-gray-300 bg-[#FEFAF6] p-2 focus:border-[#102C57] focus:outline-none grow"
            placeholder="نام کاربری"
            {...register("username")}
          />
        </label>
        {errors.username && (
          <p className="text-red-500 mt-3">{errors.username.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="password"
            className="border-b-2 border-gray-300 bg-[#FEFAF6] p-2 focus:border-[#102C57] focus:outline-none grow"
            placeholder="رمز عبور"
            {...register("password")}
          />
        </label>
        {errors.password && (
          <p className="text-red-500 mt-3">{errors.password.message}</p>
        )}
      </div>
      <button type="submit" className="btn bg-[#102C57] text-white">
        ورود
      </button>
    </form>
  );
}
