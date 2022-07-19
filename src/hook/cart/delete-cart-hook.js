import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import notify from "../../hook/useNotifaction";
import "react-toastify/dist/ReactToastify.css";
import { clearAllCartItem } from "./../../Redux/action/cartAction";

const DeleteCartHook = (item) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [itemCount, setItemCount] = useState(0);
  const handelDeleteCart = async () => {
    setLoading(true);
    await dispatch(clearAllCartItem());
    setLoading(false);
  };
  const onChangeCount = (e) => {
    setItemCount(e.target.value);
  };
  useEffect(() => {
    if (item) setItemCount(item.count);
  }, []);
  const res = useSelector((state) => state.cartReducer.clearCart);
  useEffect(() => {
    if (loading === false) {
      if (res === "") {
        notify("تم الحذف بنجاح", "success");
        setTimeout(() => {
          window.location.reload(false);
        }, 1000);
      } else {
      }
    }
  }, [loading]);

  return [handelDeleteCart, itemCount, onChangeCount];
};

export default DeleteCartHook;
