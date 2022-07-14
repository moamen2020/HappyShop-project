import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "../../hook/useNotifaction";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../Redux/action/authAction";

const LoginHook = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onsubmit = async () => {
    setLoading(true);
    await dispatch(
      loginUser({
        email,
        password,
      })
    );
    setLoading(false);
  };

  const res = useSelector((state) => state.authReducer.loginUser);
  useEffect(() => {
    if (loading === false) {
      if (res) {
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user", JSON.stringify(res.data.data));
          notify("تم تسجيل الدخول بنجاح", "success");
          setTimeout(() => {
            window.location.href = "/";
          }, 1500);
        } else {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
        }
      }
    }
  }, [loading]);

  return [email, password, loading, onChangeEmail, onChangePassword, onsubmit];
};

export default LoginHook;
