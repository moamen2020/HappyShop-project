import React, { useState } from "react";

const ForgetPasswordHook = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onSubmit = async () => {};

  return [email, onChangeEmail, onSubmit];
};

export default ForgetPasswordHook;
