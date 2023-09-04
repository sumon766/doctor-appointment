/* eslint-disable dot-notation */
import axios from "axios";

// const token = "";

const useAxios = () => {
  axios.defaults.baseURL = process.env.REACT_APP_RAILS_API;
  // axios.defaults.withCredentials = true;
  //   axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  return { axios };
};

export default useAxios;
