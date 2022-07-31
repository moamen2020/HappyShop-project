import axios from "axios";

const baseURL = axios.create({
  baseURL: "https://back-end-ecommerce-after-login.herokuapp.com",
});

export default baseURL;
