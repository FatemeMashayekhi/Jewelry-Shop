import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { Category } from "../../models/DataContextModel";
import CardComponent from "../card/Card";

const CategoriesCards: React.FC = () => {
  const { getAllCategories } = useContext(DataContext);

  if (!getAllCategories) {
    return <div>Loading...</div>;
  }

  if (getAllCategories.isError) {
    return <div>Error loading categories</div>;
  }
  return (
    <div id="categories-cards" className="flex px-14 justify-center gap-x-20">
      {Array.isArray(getAllCategories.data) &&
        getAllCategories?.data.map((item: Category) => (
          <CardComponent key={item._id} item={item} isCategory={true} />
        ))}
    </div>
  );
};

export default CategoriesCards;
