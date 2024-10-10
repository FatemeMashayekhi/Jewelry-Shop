import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import Sidebar from "../components/grouping/SideBar";
import { ProductsEntity } from "../models/GetProductsModel";
import CardComponent from "../components/card/Card";

export default function Grouping() {
  const [products, setProducts] = useState<ProductsEntity[]>([]);
  const { categoryId } = useParams<{ categoryId: string }>();
  const { setCategoryId, category, getProducts } = useContext(DataContext);

  useEffect(() => {
    if (setCategoryId && categoryId) {
      setCategoryId(categoryId);
    }
  }, [categoryId, setCategoryId]);

  useEffect(() => {
    if (categoryId && Array.isArray(getProducts?.data)) {
      const findProduct = getProducts.data.filter(
        (item) => item.category._id === categoryId
      );
      if (category) {
        setProducts(findProduct);
      }
    }
  }, [categoryId, getProducts]);
  console.log(category);

  return (
    <>
      <div className="bg-[#e5dfd7] h-2"></div>
      <div className="flex gap-x-8">
        <Sidebar />
        <div id="category-group" className="flex flex-col gap-y-5 p-4 mt-4">
          <div className="flex gap-x-1 mb-4 font-semibold text-2xl">
            {category && <p>{category.name} های</p>}

            <p>طلا</p>
          </div>

          <div className="grid grid-cols-4 gap-10 justify-items-center">
            {Array.isArray(products) &&
              products.map((item: ProductsEntity) => (
                <CardComponent
                  key={item._id}
                  item={item}
                  showDiscount={false}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
