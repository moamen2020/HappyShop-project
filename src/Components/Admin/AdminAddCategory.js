import React, { useState, useEffect } from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import avatar from "../../images/avatar.png";
import { useDispatch } from "react-redux";
import { createCategoryPage } from "../../Redux/action/categoryAction";

const AdminAddCategory = () => {
  const [img, setImg] = useState(avatar);
  const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);

  const dispatch = useDispatch();

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImg(URL.createObjectURL(event.target.files[0]));
      setSelectedFile(event.target.files[0]);
    }
  };

  // Save data in database
  const handelSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", selectedFile);

    setLoading(true);
    setIsPress(true);
    await dispatch(createCategoryPage(formData));
    setLoading(false);
  };

  useEffect(() => {
    if (!loading) {
      setImg(avatar);
      setName("");
      setSelectedFile(null);
      console.log("تم الإنتهاء");
      setLoading(true);
      setIsPress(false);
    }
  }, [loading]);

  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">اضافه تصنيف جديد</div>
        <Col sm="8">
          <div className="text-form pb-2">صوره التصنيف</div>
          <div>
            <label for="upload-photo">
              <img
                src={img}
                alt="fzx"
                height="100px"
                width="120px"
                style={{ cursor: "pointer" }}
              />
            </label>
            <input
              type="file"
              name="photo"
              onChange={onImageChange}
              id="upload-photo"
            />
          </div>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="اسم التصنيف"
          />
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button onClick={handelSubmit} className="btn-save d-inline mt-2 ">
            حفظ التعديلات
          </button>
        </Col>
      </Row>
      {isPress ? (
        loading ? (
          <Spinner animation="border" variant="primary" />
        ) : (
          <h4>تم الإنتهاء</h4>
        )
      ) : null}
    </div>
  );
};
export default AdminAddCategory;
