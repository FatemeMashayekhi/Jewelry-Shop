import { useMutation, useQuery } from "@tanstack/react-query";
import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { Admin, Category, DataContextType } from "../models/ContextModel";
import dataService from "../services/DataService";
import { queryClient } from "../main";
import { useNavigate } from "react-router-dom";
import { ProductsEntity } from "../models/GetProductsModel";

export const DataContext = createContext<DataContextType>({});

export const DataContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  ///admin login
  const navigate = useNavigate();
  const postLogin = useMutation({
    mutationFn: async (admin: Admin) => {
      try {
        const res = await dataService.postLogin(admin);
        return res;
      } catch (e) {
        console.log("Error:", e);
      }
    },
    onSuccess: (data) => {
      if (data && data.token) {
        console.log(data);
        localStorage.setItem("accessToken", data.token.accessToken);
        localStorage.setItem("refreshToken", data.token.refreshToken);
        toast.success("ورود شما با موفقیت انجام شد");
        navigate("/management");
      } else {
        console.error("Token data is missing in the response");
      }
    },
  });

  const handleLogin = (admin: Admin) => {
    postLogin.mutate(admin);
  };
  ///generate access token
  // const postGenerateAccessToken = useMutation({
  //   mutationFn: async (refreshToken: string) => {
  //     try {
  //       const res = await dataService.postGenerateAccessToken(refreshToken);
  //       return res;
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   },
  //   onSuccess: (data) => {
  //     localStorage.setItem("accessToken", data.token.accessToken);
  //     alert("Doneeee");
  //   },
  // });

  ///get all categories
  const getAllCategories = useQuery<Category[], unknown>({
    queryKey: ["getAllCategories"],
    queryFn: async () => {
      const allCategories = await dataService.getAllCategories();
      return allCategories.data.categories;
    },
  });

  ///pagination
  const [page, setPage] = useState<string>("1");
  const [totalPages, setTotalPages] = useState<number>(0);

  ///get all products
  const getAllProducts = useQuery({
    queryKey: ["getAllProducts", page],
    queryFn: async () => {
      const allProducts = await dataService.getAllProducts(page);
      console.log(allProducts);
      setTotalPages(allProducts.total_pages);
      return allProducts.data.products;
    },
  });

  ///add product modal
  const [openAdd, setOpenAdd] = useState(false);

  ///delete product modal
  const [openDelete, setOpenDelete] = useState(false);

  ///deleted product id keeper
  const [deletedProductId, setDeletedProductId] = useState("");

  ///edited product id keeper
  const [editedProduct, setEditedProduct] = useState<ProductsEntity>();

  ///delete product btn handler
  const deleteBtnHandler = (id: string) => {
    setOpenDelete(true);
    setDeletedProductId(id);
  };

  ///edit btn handler
  const editBtnHandler = (item: ProductsEntity) => {
    setOpenAdd(true);
    setEditedProduct(item);
  };

  ///post new product
  const postNewProduct = useMutation({
    mutationFn: async (product: FormData) => {
      const newProduct = await dataService.PostProducts(product);
      console.log(newProduct);
      return newProduct;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getAllProducts"] });
      toast.success("محصول جدید با موفقیت اضافه شد");
    },
  });

  const handlePostNewProduct = (product: FormData) => {
    postNewProduct.mutate(product);
  };

  ///get all subcategories
  const getAllSubCategories = useQuery({
    queryKey: ["getAllSubCategories"],
    queryFn: async () => {
      const allSubCategories = await dataService.getAllSubCategories();
      return allSubCategories.data.subcategories;
    },
  });

  ///delete products by id
  const deleteProductsById = useMutation({
    mutationFn: async (id: string) => {
      const deletedProduct = await dataService.deleteProducts(id);
      console.log(deletedProduct);
      return deletedProduct;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getAllProducts"] });
      toast.success("محصول با موفقیت حذف شد");
    },
  });

  const handleDeleteProduct = (id: string) => {
    deleteProductsById.mutate(id);
  };

  ///edit product by id
  const editProductById = useMutation({
    mutationFn: async (id: string) => {
      const editedProduct = await dataService.editProduct(id);
      return editedProduct;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getAllProducts"] });
      toast.success("محصول با موفقیت ویرایش شد");
    },
  });

  const handleEditProduct = (id: string) => {
    editProductById.mutate(id);
  };

  return (
    <DataContext.Provider
      value={{
        handleLogin,
        getAllCategories,
        getAllProducts,
        openAdd,
        setOpenAdd,
        handlePostNewProduct,
        page,
        setPage,
        totalPages,
        getAllSubCategories,
        handleDeleteProduct,
        openDelete,
        setOpenDelete,
        deleteBtnHandler,
        deletedProductId,
        handleEditProduct,
        editBtnHandler,
        editedProduct,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
