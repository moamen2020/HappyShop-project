import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllCategory,
  getAllCategoryPage,
} from "../../Redux/action/categoryAction";

const AllCategoryHook = () => {
  const dispatch = useDispatch();
  //when first load
  useEffect(() => {
    dispatch(getAllCategory(6));
  }, [dispatch]);

  //to get state from redux
  const category = useSelector((state) => state.allCategory.category);
  const loading = useSelector((state) => state.allCategory.loading);

  //to get page count
  let pageCount = 0;
  if (category.paginationResult)
    pageCount = category.paginationResult.numberOfPages;

  //when press pagination
  const getPage = (page) => {
    dispatch(getAllCategoryPage(page));
    console.log(page);
  };

  return [category, loading, pageCount, getPage];
};

export default AllCategoryHook;
