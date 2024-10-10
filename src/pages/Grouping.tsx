import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../context/DataContext";

export default function Grouping() {
  const { categoryId } = useParams();
  const { setCategoryId, category } = useContext(DataContext);
  useEffect(() => {
    if (setCategoryId && categoryId) {
      setCategoryId(categoryId);
    }
  }, [categoryId, setCategoryId]);
  console.log(category);

  return <div>Grouping</div>;
}
