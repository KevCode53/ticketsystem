const API = "http://127.0.0.1:8000";
const axios = require("axios").default;

export const login = async (data) => {
  const api_url = `${API}/login/`;
  // const response = await fetch(api_url, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(data),
  // });
  // const res = response.json();
  // return res;
  const response = await axios.post(api_url, data);
  return response.data;
};
