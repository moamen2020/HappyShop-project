import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProducts,
  getAllProductsPage,
  getAllProductsSearch,
} from "../../Redux/action/productAction";

const ViewSearchProductsHook = () => {
  const dispatch = useDispatch();

  let limit = 6;

  const getProduct = async () => {
    let word = "";
    let queryCategory = "";
    if (localStorage.getItem("SearchWord") != null) {
      word = localStorage.getItem("SearchWord");
    }
    if (localStorage.getItem("CategoryChecked") != null) {
      queryCategory = localStorage.getItem("CategoryChecked");
    }
    sortData();
    await dispatch(
      getAllProductsSearch(
        `sort=${sort}&limit=${limit}&keyword=${word}&${queryCategory}`
      )
    );
  };

  useEffect(() => {
    // dispatch(getAllProductsSearch(`limit=${limit}&keyword=${word}`));
    getProduct();
  }, [dispatch]);

  const onPress = async (page) => {
    let word = "";
    let queryCategory = "";
    if (localStorage.getItem("SearchWord") != null) {
      word = localStorage.getItem("SearchWord");
    }

    if (localStorage.getItem("CategoryChecked") != null) {
      queryCategory = localStorage.getItem("CategoryChecked");
    }
    sortData();
    await dispatch(
      getAllProductsSearch(
        `sort=${sort}&limit=${limit}&page=${page}&keyword=${word}&${queryCategory}`
      )
    );
  };

  const allProducts = useSelector((state) => state.allProducts.allProducts);

  let items = [];
  let pagination = [];
  let results = [];

  try {
    if (allProducts.data) {
      items = allProducts.data;
    } else items = [];
  } catch (error) {}

  try {
    if (allProducts.results) {
      results = allProducts.results;
    } else results = 0;
  } catch (error) {}

  try {
    if (allProducts.paginationResult) {
      pagination = allProducts.paginationResult.numberOfPages;
    } else pagination = [];
  } catch (error) {}

  let sortType = "";
  let sort;
  const sortData = () => {
    if (localStorage.getItem("SortType")) {
      sortType = localStorage.getItem("SortType");
    } else {
      sortType = "";
    }

    if (sortType === "السعر من الاقل للاعلي") {
      sort = "+price";
    }

    if (sortType === "السعر من الاعلي للاقل") {
      sort = "-price";
    }

    if (sortType === "الاعلي تقييما") {
      sort = "-ratingsQuantity";
    }

    if (sortType === "الاكثر مبيعا") {
      sort = "-sold";
    }
  };

  return [items, pagination, onPress, getProduct, results];
};

export default ViewSearchProductsHook;
