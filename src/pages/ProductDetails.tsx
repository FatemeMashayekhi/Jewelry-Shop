import Slider from "../components/product-details/Slider";
import InformationSide from "../components/product-details/InformationSide";
import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { DataContext } from "../context/DataContext";

export default function ProductDetails() {
  const { productId } = useParams();
  const { setProductId } = useContext(DataContext);
  useEffect(() => {
    if (setProductId && productId) {
      setProductId(productId);
    }
  }, [productId, setProductId]);
  return (
    <div className="flex justify-center mt-32">
      <div id="image-slider">
        <Slider />
      </div>
      <div id="information" className="bg-[#e5dfd7] p-4">
        <InformationSide />
      </div>
    </div>
  );
}
