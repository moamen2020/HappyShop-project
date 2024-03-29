import { useEffect, useState } from "react";
import { createSubCategory } from "../../Redux/action/subCategoryAction";
import notify from "../useNotifaction";
import { getAllCategory } from "../../Redux/action/categoryAction";
import { useSelector, useDispatch } from "react-redux";

const AddSubcategoryHook = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (!navigator.onLine) {
      notify("هناك مشكله فى الاتصال بالانترنت", "warn");
      return;
    }
    dispatch(getAllCategory());
  }, [dispatch]);

  const [id, setID] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);
  //get last catgeory state from redux
  const category = useSelector((state) => state.allCategory.category);

  console.log("AddSubcategoryHook");
  console.log(category);
  console.log("AddSubcategoryHook");

  //get last sub catgeory state from redux
  const subcategory = useSelector((state) => state.subCategory.subCategory);

  //on change dropdown menu
  const handelChange = (e) => {
    console.log(e.target.value);
    setID(e.target.value);
  };

  //to save name
  const onChangeName = (e) => {
    e.persist();
    setName(e.target.value);
  };
  //on save data
  const handelSubmit = async (e) => {
    e.preventDefault();
    if (!navigator.onLine) {
      notify("هناك مشكله فى الاتصال بالانترنت", "warn");
      return;
    }
    if (id === "0") {
      notify("من فضلك اختر تصنيف رئيسي", "warn");
      return;
    }
    if (name === "") {
      notify("من فضلك ادخل اسم التصنيف", "warn");
      return;
    }

    setLoading(true);
    await dispatch(
      createSubCategory({
        name,
        category: id,
      })
    );
    setLoading(false);
  };
  useEffect(() => {
    if (loading === false) {
      setName("");
      setID("0");
      if (subcategory) console.log(subcategory);
      if (subcategory.status === 201) {
        notify("تمت الاضافة بنجاح", "success");
      } else if (
        subcategory === "Error Error: Request failed with status code 400"
      ) {
        notify("هذا الاسم مكرر من فضلك اختر اسم اخر", "warn");
      } else {
        notify("هناك مشكله فى عملية الاضافة", "warn");
      }

      setLoading(true);
    }
  }, [loading]);

  return [
    id,
    name,
    loading,
    category,
    subcategory,
    handelChange,
    handelSubmit,
    onChangeName,
  ];
};

export default AddSubcategoryHook;
