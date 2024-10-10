import Slider from "../components/product-details/Slider";
import InformationSide from "../components/product-details/InformationSide";

export default function ProductDetails() {
  return (
    <div className="flex justify-center">
      <div id="image-slider">
        <Slider />
      </div>
      <div id="information" className="bg-[#e5dfd7] p-4">
        <InformationSide />
      </div>
    </div>
  );
}
