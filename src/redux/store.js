import { configureStore } from "@reduxjs/toolkit";
import doctorListReducer from "./doctor_list_slice";
import UISlice from "./UISlice";

const store = configureStore({
  reducer: {
    ui: UISlice,
    doctorList: doctorListReducer,
  },
});

export default store;
