import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AddRateHook = (id) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [rateText, setRateText] = useState("");
  const [rateValue, setRateValue] = useState(0);

  const [loading, setLoading] = useState(true);

  const onChangeRateText = (e) => {
    setRateText(e.target.value);
  };
  const onChangeRateValue = (val) => {
    setRateValue(val);
  };
  var user = "";
  if (localStorage.getItem("user") != null)
    user = JSON.parse(localStorage.getItem("user"));

  ///when save rate
  const onSubmit = async () => {};

  return [
    rateText,
    rateValue,
    user,
    onChangeRateText,
    onChangeRateValue,
    onSubmit,
  ];
};

export default AddRateHook;
