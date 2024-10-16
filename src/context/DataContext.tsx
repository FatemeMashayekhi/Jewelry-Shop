import { useMutation, useQuery } from "@tanstack/react-query";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Admin, Category, DataContextType } from "../models/DataContextModel";
import dataService from "../services/DataService";
import { queryClient } from "../main";
import { useNavigate } from "react-router-dom";
import { ProductsEntity } from "../models/GetProductsModel";
import { ProductById } from "../models/ProductByIdModel";
import { CategoryByID } from "../models/CategoryByIdModel";
import { OrdersEntity } from "../models/GetOrdersModel";
import { Order } from "../models/OrdersModel";

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
        localStorage.setItem("user", data.data.user._id);
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
  const [totalPages, setTotalPages] = useState<number>(1);

  ///update inventory table
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [allProducts, setAllProducts] = useState<ProductsEntity[]>([]);

  ///get all products
  const getAllProducts = useQuery({
    queryKey: ["getAllProducts", page],
    queryFn: async () => {
      const allProducts = await dataService.getAllProducts(page);
      setTotalPages(allProducts.total_pages);
      setAllProducts(allProducts.data.products);
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
  const [editedProduct, setEditedProduct] = useState<ProductsEntity | null>(
    null
  );

  ///product details(clicked product)
  const [productId, setProductId] = useState<string | null>(null);

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
    mutationFn: async ({ id, product }: { id: string; product: FormData }) => {
      const editedProduct = await dataService.editProduct(id, product);
      return editedProduct;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getAllProducts"] });
      toast.success("محصول با موفقیت ویرایش شد");
    },
  });

  const handleEditProduct = (id: string, product: FormData) => {
    editProductById.mutate({ id, product });
  };

  ///get discount products
  const getDiscountProducts = useQuery({
    queryKey: ["getDiscountProducts"],
    queryFn: async () => {
      const discountProducts = await dataService.getDiscountProducts();
      return discountProducts.data.products;
    },
  });

  ///get popular products
  const getPopularProducts = useQuery({
    queryKey: ["getPopularProducts"],
    queryFn: async () => {
      try {
        const allPopularProducts = await dataService.getPopularProducts();
        return allPopularProducts.data.products;
      } catch (e) {
        console.log(e);
      }
    },
  });

  ///get products with by id url
  const getProducts = useQuery({
    queryKey: ["getProducts"],
    queryFn: async () => {
      try {
        const products = await dataService.getProducts();
        return products.data.products;
      } catch (e) {
        console.log(e);
      }
    },
  });

  ///get product by id
  const [singleProduct, setSingleProduct] = useState<ProductById>();
  useEffect(() => {
    const fetchProduct = async () => {
      if (productId) {
        try {
          const product = await dataService.getAllProductsById(productId);
          setSingleProduct(product.data.product);
        } catch (error) {
          console.error("Failed to fetch product:", error);
        }
      }
    };

    fetchProduct();
  }, [productId]);

  ///get category by id
  const [category, setCategory] = useState<CategoryByID | null>();
  const [categoryId, setCategoryId] = useState<string>();
  useEffect(() => {
    const fetchCategory = async () => {
      if (categoryId) {
        try {
          const category = await dataService.getCategoryById(categoryId);
          setCategory(category.data.category);
        } catch (error) {
          console.error("Failed to fetch product:", error);
        }
      }
    };

    fetchCategory();
  }, [categoryId]);

  ///get all orders
  const [status, setStatus] = useState("true");
  const [orders, setOrders] = useState<OrdersEntity[]>();
  const [orderPage, setOrderPage] = useState<string>("1");
  const [orderTotalPages, setOrderTotalPages] = useState<string>("1");
  useEffect(() => {
    const fetchOrders = async () => {
      if (status) {
        try {
          const orders = await dataService.getAllOrders(
            String(status),
            orderPage
          );
          setOrders(orders.data.orders);
          setOrderTotalPages(orders.total_pages);
        } catch (error) {
          console.error("Failed to fetch orders:", error);
        }
      }
    };

    fetchOrders();
  }, [status, orderPage]);

  ///update cart items in local storage
  const [updatedCart, setUpdatedCart] = useState<ProductById[]>(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }, [updatedCart]);

  ///get gold price
  const { data: goldPrice } = useQuery({
    queryKey: ["getGoldPrice"],
    queryFn: async () => {
      const goldPrice = await dataService.fetchGoldPrice();
      return goldPrice;
    },
    refetchInterval: 5 * 60 * 1000,
  });

  ///post order
  const postOrder = useMutation({
    mutationFn: async (order: Order) => {
      const newOrder = await dataService.postOrder(order);
      return newOrder.data.orders;
    },
    onSuccess: () => {
      toast.success("سفارش شما با موفقیت ثبت شد");

      setUpdatedCart([]);
    },
    onError: (error) => {
      toast.error("خطا در ثبت سفارش. لطفا دوباره تلاش کنید");
      console.error("Order submission error:", error);
    },
  });

  const handlePostOrder = (order: Order) => {
    postOrder.mutate(order);
  };

  ///handle inventory edit
  const [editedInventory, setEditedInventory] = useState<{
    [id: string]: FormData;
  }>({});
  const [editedInventoryIds, setEditedInventoryIds] = useState<string[]>([]);
  const [flag, setFlag] = useState(false);

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
        setEditedProduct,
        getDiscountProducts,
        getPopularProducts,
        getProducts,
        setProductId,
        singleProduct,
        setCategoryId,
        category,
        setAllProducts,
        setStatus,
        orders,
        setUpdatedCart,
        updatedCart,
        goldPrice,
        handlePostOrder,
        orderTotalPages,
        setOrderPage,
        orderPage,
        editedInventory,
        setEditedInventory,
        editedInventoryIds,
        setEditedInventoryIds,
        flag,
        setFlag,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
