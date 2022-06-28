import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../Redux/action/categoryAction";
import { getSubCategory } from "../../Redux/action/subCategoryAction";
import { getAllBrand } from "../../Redux/action/brandAction";
import { createProduct } from "../../Redux/action/productAction";
import notify from "../../hook/useNotifaction";

const AdminAddProductHook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategory());
    dispatch(getAllBrand());
  }, []);

  //get last catgeory state from redux
  const category = useSelector((state) => state.allCategory.category);

  //get last brand state from redux
  const brand = useSelector((state) => state.allBrand.brand);

  //get sub Category from redux
  const subCategory = useSelector((state) => state.subCategory.subCategory);
  console.log(subCategory);

  const [options, setOptions] = useState([]);

  const [images, setImages] = useState([]);

  // Values state
  const [prodName, setProdName] = useState("");
  const [prodDescription, setProdDescription] = useState("");
  const [priceBefore, setPriceBefore] = useState("");
  const [priceAfter, setPriceAfter] = useState("");
  const [qty, setQty] = useState("");
  const [catID, setCatID] = useState({});
  const [brandID, setBrandID] = useState({});
  const [selectedSubID, setSelectedSubID] = useState([]);
  const [loading, setLoading] = useState(true);

  const onChangeProdName = (event) => {
    event.persist();
    setProdName(event.target.value);
  };

  const onChangeDescName = (event) => {
    event.persist();
    setProdDescription(event.target.value);
  };

  const onChangePriceBefore = (event) => {
    event.persist();
    setPriceBefore(event.target.value);
  };

  const onChangePriceAfter = (event) => {
    event.persist();
    setPriceAfter(event.target.value);
  };

  const onChangeQty = (event) => {
    event.persist();
    setQty(event.target.value);
  };

  const onChangeColor = (event) => {
    event.persist();
    setShowColor(!showColor);
  };

  // To show hide color picker
  const [showColor, setShowColor] = useState(false);
  // Store colors
  const [colors, setColors] = useState([]);

  const handleChangeColor = (color) => {
    setColors([...colors, color.hex]);
    setShowColor(!showColor);
  };

  const removeColor = (color) => {
    const newColors = colors.filter((item) => item !== color);
    setColors([...newColors]);
  };

  const onSelect = (selectedList, selectedItem) => {
    setSelectedSubID(selectedList);
  };

  const onRemove = (selectedList, removedItem) => {
    setSelectedSubID(selectedList);
  };

  const onSelectCategory = async (e) => {
    if (e.target.value !== 0) await dispatch(getSubCategory(e.target.value));
    setCatID(e.target.value);
  };

  useEffect(() => {
    if (catID !== 0) {
      if (subCategory.data) {
        setOptions(subCategory.data);
      }
    }
  }, [catID, subCategory.data]);

  const onSelectBrand = (e) => {
    setBrandID(e.target.value);
  };

  // convert base64 image to file
  function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
  }

  // Save Data in DB
  const handelSubmit = async (e) => {
    e.preventDefault();
    if (
      catID <= 0 ||
      prodName === "" ||
      prodDescription === "" ||
      qty <= 0 ||
      images.length <= 0 ||
      priceBefore <= 0
    ) {
      notify("من فضلك اكمل البيانات", "warn");
      return;
    }

    const imgCover = dataURLtoFile(images[0], Math.random() + ".png");

    const itemImages = Array.from(Array(Object.keys(images).length).keys()).map(
      (item, index) => {
        return dataURLtoFile(images[index], Math.random() + ".png");
      }
    );

    const formData = new FormData();
    formData.append("title", prodName);
    formData.append("description", prodDescription);
    formData.append("quantity", qty);
    formData.append("price", priceBefore);
    formData.append("imageCover", imgCover);
    formData.append("category", catID);
    formData.append("brand", brandID);

    colors.map((color) => formData.append("availableColors", color));
    selectedSubID.map((item) => formData.append("subcategory", item._id));
    itemImages.map((item) => formData.append("images", item));

    setLoading(true);
    await dispatch(createProduct(formData));
    setLoading(false);
  };

  // priceAfter;
  // brandID;
  // selectedSubID;

  //get all product from redux
  const products = useSelector((state) => state.allProducts.products);

  useEffect(() => {
    if (loading === false) {
      setProdName("");
      setProdDescription("");
      setPriceBefore("");
      setPriceAfter("");
      setQty("");
      setBrandID("0");
      setCatID(0);
      setSelectedSubID([]);
      setColors([]);
      setImages([]);
      setOptions([]);

      setTimeout(() => setLoading(true), 1000);

      if (products) {
        if (products.status === 201) {
          notify("تمت الاضافة بنجاح", "success");
        }
      }
    }
  }, [loading, products]);

  return [
    images,
    prodName,
    prodDescription,
    priceBefore,
    priceAfter,
    category,
    options,
    brand,
    colors,
    showColor,
    qty,
    setImages,
    onSelectCategory,
    onSelect,
    onRemove,
    onSelectBrand,
    handleChangeColor,
    handelSubmit,
    removeColor,
    onChangeProdName,
    onChangeDescName,
    onChangePriceBefore,
    onChangePriceAfter,
    onChangeQty,
    onChangeColor,
  ];
};

export default AdminAddProductHook;
