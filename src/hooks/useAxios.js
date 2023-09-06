/* eslint-disable dot-notation */
import axios from "axios";

const useAxios = () => {
  axios.defaults.baseURL = process.env.REACT_APP_RAILS_API;

  return { axios };
};

export default useAxios;
