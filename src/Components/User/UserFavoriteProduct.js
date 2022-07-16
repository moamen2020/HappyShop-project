import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import CardProductsContainer from "./../Products/CardProductsContainer";
import { useDispatch, useSelector } from "react-redux";
import { getProductWishList } from "../../Redux/action/wishListAction";

const UserFavoriteProduct = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  useEffect(() => {
    const get = async () => {
      setLoading(true);
      await dispatch(getProductWishList());
      setLoading(false);
    };
    get();
  }, []);

  const res = useSelector((state) => state.addToWishListReducer.allWishList);
  useEffect(() => {
    if (loading === false) {
      if (res) setItems(res.data);
    }
  }, [loading]);

  return (
    <Row className="justify-content-between ">
      <div className="admin-content-text">المنتجات المفضله</div>
      <Row className="justify-content-between ">
        {items.length <= 0 ? (
          <h6>لا يوجد منتدات مفضله حاليا</h6>
        ) : (
          <CardProductsContainer products={items} title="" btntitle="" />
        )}
      </Row>
    </Row>
  );
};

export default UserFavoriteProduct;
