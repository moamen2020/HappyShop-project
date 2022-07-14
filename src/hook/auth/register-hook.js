import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "../../hook/useNotifaction";
import { createNewUser } from "../../Redux/action/authAction";

const RegisterHook = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setloading] = useState(true);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.createUser);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePhone = (e) => {
    setPhone(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const validationValues = () => {
    if (name === "") {
      notify("من فضلك ادخل اسم المسنخدم", "error");
      return;
    }

    if (phone.length <= 10) {
      notify("من فضلك ادخل رقم هاتف صحيح", "error");
      return;
    }

    if (password != confirmPassword) {
      notify("من فضلك تأكد من تطابق كلمة السر", "error");
      return;
    }
  };

  const onsubmit = async () => {
    validationValues();
    setloading(true);
    await dispatch(
      createNewUser({
        name,
        email,
        password,
        passwordConfirm: confirmPassword,
        phone,
      })
    );
    setloading(false);
  };

  useEffect(() => {
    if (loading === false) {
      if (user) {
        if (user.data.token) {
          localStorage.setItem("token", user.data.token);
        }

        if (user.data.error) {
          if (user.data.errors[0].msg == "E-mail already in use") {
            notify("هذا الايميل مسجل من قبل", "error");
          }
        }
      }
    }

    console.log(user);
  }, [loading]);

  return [
    name,
    email,
    phone,
    password,
    confirmPassword,
    loading,
    onChangeName,
    onChangeEmail,
    onChangePhone,
    onChangePassword,
    onChangeConfirmPassword,
    onsubmit,
  ];
};

export default RegisterHook;
