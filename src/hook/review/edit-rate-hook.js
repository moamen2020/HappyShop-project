import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "../useNotifaction";
const EditRateHook = (review) => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  const [newRateText, setNewRateText] = useState(review.review);
  const [newRateValue, setNewRateValue] = useState(review.rating);

  const [showEdit, setShowEdit] = useState(false);
  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);

  const onChangeRateText = (e) => {
    setNewRateText(e.target.value);
  };
  const OnChangeRateValue = (val) => {
    setNewRateValue(val);
  };

  const handelEdit = async () => {
    setLoading(true);

    setLoading(false);
    handleCloseEdit();
  };
  const res = useSelector((state) => state.reviewReducer.updateReview);

  useEffect(() => {
    if (loading === false) {
      console.log(res);
      if (res.status && res.status === 200) {
        notify("تم تعديل التقييم بنجاح", "success");
        setTimeout(() => {
          window.location.reload(false);
        }, 1000);
      } else notify("هناك مشكله فى عملية التعديل", "error");
    }
  }, [loading]);

  return [
    showEdit,
    newRateText,
    newRateValue,
    handleCloseEdit,
    handleShowEdit,
    handelEdit,
    onChangeRateText,
    OnChangeRateValue,
  ];
};

export default EditRateHook;
