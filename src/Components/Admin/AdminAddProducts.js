import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
// import avatar from "../../images/avatar.png";
import add from "../../images/add.png";
import Multiselect from "multiselect-react-dropdown";
import MultiImageInput from "react-multiple-image-input";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../Redux/action/categoryAction";
import { getSubCategory } from "../../Redux/action/subCategoryAction";
import { getAllBrand } from "../../Redux/action/brandAction";
import { CompactPicker } from "react-color";

const AdminAddProducts = () => {
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
  const [subCatID, setSubCatID] = useState([]);
  const [selectedSubID, setSelectedSubID] = useState([]);

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
    if (e.target.value != 0) await dispatch(getSubCategory(e.target.value));
    setCatID(e.target.value);
  };

  useEffect(() => {
    if (catID !== 0) {
      if (subCategory.data) {
        setOptions(subCategory.data);
      }
    }
  }, [catID]);

  const onSelectBrand = (e) => {
    setBrandID(e.target.value);
  };

  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4"> اضافه منتج جديد</div>
        <Col useStatesm="8">
          <div className="text-form pb-2"> صور للمنتج</div>
          <MultiImageInput
            images={images}
            setImages={setImages}
            theme={"light"}
            allowCrop={false}
            max={5}
          />
          <input
            value={prodName}
            onChange={(e) => setProdName(e.target.value)}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="اسم المنتج"
          />
          <textarea
            value={prodDescription}
            onChange={(e) => setProdDescription(e.target.value)}
            className="input-form-area p-2 mt-3"
            rows="4"
            cols="50"
            placeholder="وصف المنتج"
          />
          <input
            value={priceBefore}
            onChange={(e) => setPriceBefore(e.target.value)}
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="السعر قبل الخصم"
          />
          <input
            value={priceAfter}
            onChange={(e) => setPriceAfter(e.target.value)}
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="السعر بعد الخصم"
          />
          <input
            value={qty}
            onChange={(e) => setQty(e.target.value)}
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="الكمية المتاحة"
          />
          <select
            name="cat"
            onChange={onSelectCategory}
            className="select input-form-area mt-3 px-2 "
          >
            <option value="val">التصنيف الرئيسي</option>
            {category.data
              ? category.data.map((item, index) => {
                  return (
                    <option key={index} value={item._id}>
                      {item.name}
                    </option>
                  );
                })
              : null}
          </select>

          <Multiselect
            className="mt-2 text-end"
            placeholder="التصنيف الفرعي"
            options={options}
            onSelect={onSelect}
            onRemove={onRemove}
            displayValue="name"
            style={{ color: "red" }}
          />
          <select
            name="brand"
            id="brand"
            onChange={onSelectBrand}
            className="select input-form-area mt-3 px-2 "
          >
            <option value="val">الماركة</option>
            {brand.data
              ? brand.data.map((item, index) => {
                  return (
                    <option key={index} value={item._id}>
                      {item.name}
                    </option>
                  );
                })
              : null}
          </select>
          <div className="text-form mt-3 "> الالوان المتاحه للمنتج</div>
          <div className="mt-1 d-flex">
            {colors.length
              ? colors.map((color, index) => {
                  return (
                    <div
                      key={index}
                      onClick={() => removeColor(color)}
                      className="color ms-2 border  mt-1"
                      style={{ backgroundColor: color }}
                    ></div>
                  );
                })
              : null}
            <img
              src={add}
              alt=""
              width="30px"
              height="35px"
              style={{ cursor: "pointer" }}
              onClick={() => setShowColor(!showColor)}
            />
            {showColor ? (
              <CompactPicker onChangeComplete={handleChangeColor} />
            ) : null}
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button className="btn-save d-inline mt-2 ">حفظ التعديلات</button>
        </Col>
      </Row>
    </div>
  );
};

export default AdminAddProducts;
