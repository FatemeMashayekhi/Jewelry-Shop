import Form from "../components/login/Form";
import Header from "../components/login/Header";

export default function Login() {
  return (
    <div className="bg-[#EADBC8] min-h-screen flex flex-col gap-y-40">
      <Header />
      <div className="flex justify-center">
        <div id="login-card" className="flex gap-x-3 bg-[#FEFAF6] p-4">
          <div className="flex flex-col gap-y-10 p-4 w-[364px]">
            <p className="font-bold text-2xl">ورود به پنل مدیریت</p>
            <Form />
          </div>
          <div>
            <img
              src="./src/assets/images/loginpic.jpg"
              alt="login-pic"
              className="w-[364px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
