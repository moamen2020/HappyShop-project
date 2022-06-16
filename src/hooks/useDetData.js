import baseURL from "../Api/baseURL";

const useDetData = async (url, parmas) => {
  const res = await baseURL.get(url, parmas);
  return res.data;
};

export default useDetData;
