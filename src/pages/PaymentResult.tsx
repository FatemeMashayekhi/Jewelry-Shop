import { Icon } from "@iconify/react";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import { ProductById } from "../models/ProductByIdModel";

export default function PaymentResult() {
  const { handlePostOrder } = useContext(DataContext);
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const status = searchParams.get("status");
  const [orderProcessed, setOrderProcessed] = useState(false);

  useEffect(() => {
    if (status === "success" && handlePostOrder && !orderProcessed) {
      console.log({ status, orderProcessed });
      const cartString = localStorage.getItem("cart");
      const cart = cartString ? JSON.parse(cartString) : [];

      const products = cart.map((item: ProductById) => ({
        product: item._id,
        count: item.count,
      }));

      handlePostOrder({
        user: localStorage.getItem("user") as string,
        products: products,
        deliveryStatus: false,
        deliveryDate: localStorage.getItem("deliveryDate") as string,
      });

      setOrderProcessed(true);
    }
  }, [status]);

  useEffect(() => {
    if (orderProcessed) {
      const timer = setTimeout(() => {
        navigate("/");
      }, 6000);

      return () => clearTimeout(timer);
    }

    if (status === "fail") {
      const timer = setTimeout(() => {
        navigate("/checkout/cart");
      }, 6000);

      return () => clearTimeout(timer);
    }
  }, [orderProcessed, navigate]);

  return (
    <div className="flex items-center justify-center h-[60vh]">
      {status === "success" ? (
        <div className="p-8 bg-green-200 flex flex-col justify-center items-center gap-y-3 rounded-lg font-semibold">
          <Icon
            icon="icon-park-solid:check-one"
            width="100"
            height="100"
            style={{ color: "green" }}
          />
          <p>پرداخت با موفقیت انجام شد!</p>
          <p>با تشکر از خرید شما</p>
          <div className="flex items-center gap-x-1">
            <p>در حال انتقال به صفحه اصلی</p>
            <span className="loading loading-dots loading-xs"></span>
          </div>
        </div>
      ) : (
        <div className="p-8 bg-red-200 flex flex-col justify-center items-center gap-y-3 rounded-lg font-semibold">
          <Icon
            icon="material-symbols:cancel"
            width="100"
            height="100"
            style={{ color: "red" }}
          />
          <p>پرداخت ناموفق بود!</p>
          <p>لطفا دوباره تلاش کنید</p>
          <div className="flex items-center gap-x-1">
            <p>در حال انتقال به سبد خرید</p>
            <span className="loading loading-dots loading-xs"></span>
          </div>
        </div>
      )}
    </div>
  );
}
