import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "./../useNotifaction";
import { useNavigate } from "react-router-dom";

const AddAddressHook = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [alias, setAlias] = useState("");
  const [detalis, setDetalis] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(true);

  const onChangeAlias = (event) => {
    event.persist();
    setAlias(event.target.value);
  };

  const onChangeDetalis = (event) => {
    event.persist();
    setDetalis(event.target.value);
  };

  const onChangePhone = (event) => {
    event.persist();
    setPhone(event.target.value);
  };

  const onSubmit = async () => {
    if (alias === "" || detalis === "" || phone === "") {
      notify("من فضلك اكمل البيانات", "warn");
      return;
    }

    console.log(alias, detalis, phone);
  };

  return [
    alias,
    detalis,
    phone,
    onChangeAlias,
    onChangeDetalis,
    onChangePhone,
    onSubmit,
  ];
};

export default AddAddressHook;
