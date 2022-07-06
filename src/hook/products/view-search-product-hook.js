import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsSearch } from "../../Redux/action/productAction";

const ViewSearchProductsHook = () => {
  const dispatch = useDispatch();

  let limit = 6;

  const getProduct = async () => {
    getStorage();
    sortData();
    await dispatch(
      getAllProductsSearch(
        `sort=${sort}&limit=${limit}&keyword=${word}&${queryCategory}&${queryBrand}${priceFormString}${priceToString}`
      )
    );
  };

  useEffect(() => {
    // dispatch(getAllProductsSearch(`limit=${limit}&keyword=${word}`));
    getProduct();
  }, []);

  const onPress = async (page) => {
    getStorage();
    sortData();
    await dispatch(
      getAllProductsSearch(
        `sort=${sort}&limit=${limit}&page=${page}&keyword=${word}&${queryCategory}&${queryBrand}${priceFormString}${priceToString}`
      )
    );
  };

  let word = "";
  let queryCategory = "";
  let queryBrand = "";
  let priceForm = "";
  let priceTo = "";
  let priceFormString = "";
  let priceToString = "";
  const getStorage = () => {
    if (localStorage.getItem("SearchWord") != null) {
      word = localStorage.getItem("SearchWord");
    }

    if (localStorage.getItem("CategoryChecked") != null) {
      queryCategory = localStorage.getItem("CategoryChecked");
    }

    if (localStorage.getItem("BrandChecked") != null) {
      queryBrand = localStorage.getItem("BrandChecked");
    }

    if (localStorage.getItem("PriceForm") != null) {
      priceForm = localStorage.getItem("PriceForm");
    }

    if (localStorage.getItem("PriceTo") != null) {
      priceTo = localStorage.getItem("PriceTo");
    }

    if (priceForm === "" || priceForm <= 0) {
      priceFormString = "";
    } else {
      priceFormString = `&price[gt]=${priceForm}`;
    }

    if (priceTo === "" || priceTo <= 0) {
      priceToString = "";
    } else {
      priceToString = `&price[lte]=${priceTo}`;
    }
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
