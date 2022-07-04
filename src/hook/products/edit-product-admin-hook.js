import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../Redux/action/categoryAction";
import { getSubCategory } from "../../Redux/action/subCategoryAction";
import { getAllBrand } from "../../Redux/action/brandAction";
import { getOneProduct } from "../../Redux/action/productAction";
import { updateProduct } from "../../Redux/action/productAction";

import notify from "../useNotifaction";

const AdminEditProductHook = (id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const run = async () => {
      await dispatch(getOneProduct(id));
      await dispatch(getAllCategory());
      await dispatch(getAllBrand());
    };

    run();
  }, []);

  // Get on Product details
  const item = useSelector((state) => state.allProducts.oneProduct);
  console.log(item);

  //get last catgeory state from redux
  const category = useSelector((state) => state.allCategory.category);

  //get last brand state from redux
  const brand = useSelector((state) => state.allBrand.brand);

  //get sub Category from redux
  const subCat = useSelector((state) => state.subCategory.subCategory);

  const [options, setOptions] = useState([]);

  const [images, setImages] = useState([]);

  // Values state
  const [prodName, setProdName] = useState("");
  const [prodDescription, setProdDescription] = useState("");
  const [priceBefore, setPriceBefore] = useState("السعر قبل الخصم");
  const [priceAfter, setPriceAfter] = useState("السعر بعد الخصم");
  const [qty, setQty] = useState("الكمية المتاحة");
  const [catID, setCatID] = useState("0");
  const [brandID, setBrandID] = useState("0");
  const [selectedSubID, setSelectedSubID] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (item.data) {
      setImages(item.data.images);
      setProdName(item.data.title);
      setProdDescription(item.data.description);
      setPriceBefore(item.data.price);
      setQty(item.data.quantity);
      setCatID(item.data.category);
      setBrandID(item.data.brand);
      setColors(item.data.availableColors);
    }
  }, [item]);

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
    setCatID(e.target.value);
  };

  useEffect(() => {
    if (catID != 0) {
      const run = async () => {
        await dispatch(getSubCategory(catID));
      };
      run();
    }
  }, [catID]);

  useEffect(() => {
    if (subCat) {
      setOptions(subCat.data);
    }
  }, [subCat]);

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

  //convert url to file
  const convertURLtoFile = async (url) => {
    const response = await fetch(url, { mode: "cors" });
    const data = await response.blob();
    const ext = url.split(".").pop();
    const filename = url.split("/").pop();
    const metadata = { type: `image/${ext}` };
    return new File([data], Math.random(), metadata);
  };

  // Save Data in DB
  const handleSubmit = async (e) => {
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

    let imgCover;
    if (images[0].length <= 1000) {
      convertURLtoFile(images[0]).then((val) => (imgCover = val));
    } else {
      imgCover = dataURLtoFile(images[0], Math.random() + ".png");
    }

    let itemImages = [];
    //convert array of base 64 image to file
    Array.from(Array(Object.keys(images).length).keys()).map((item, index) => {
      if (images[index].length <= 1000) {
        convertURLtoFile(images[index]).then((val) => itemImages.push(val));
      } else {
        itemImages.push(dataURLtoFile(images[index], Math.random() + ".png"));
      }
    });

    const formData = new FormData();
    formData.append("title", prodName);
    formData.append("description", prodDescription);
    formData.append("quantity", qty);
    formData.append("price", priceBefore);
    formData.append("category", catID);
    formData.append("brand", brandID);

    setTimeout(() => {
      formData.append("imageCover", imgCover);
      itemImages.map((item) => formData.append("images", item));
    }, 1000);

    setTimeout(() => {
      console.log(imgCover);
      console.log(itemImages);
    }, 1000);

    colors.map((color) => formData.append("availableColors", color));
    selectedSubID.map((item) => formData.append("subcategory", item._id));

    setTimeout(async () => {
      setLoading(true);
      await dispatch(updateProduct(id, formData));
      setLoading(false);
    }, 1000);
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
          notify("تم التعديل بنجاح", "success");
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
    catID,
    brandID,
    setImages,
    onSelectCategory,
    onSelect,
    onRemove,
    onSelectBrand,
    handleChangeColor,
    handleSubmit,
    removeColor,
    onChangeProdName,
    onChangeDescName,
    onChangePriceBefore,
    onChangePriceAfter,
    onChangeQty,
    onChangeColor,
  ];
};

export default AdminEditProductHook;
