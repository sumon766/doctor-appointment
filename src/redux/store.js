import { configureStore } from "@reduxjs/toolkit";
import doctorListReducer from "./doctor_list_slice";
import appointmentReducer from "./appointmentSlice";
import UISlice from "./UISlice";

const store = configureStore({
  reducer: {
    appointment: appointmentReducer,
    ui: UISlice,
    doctorList: doctorListReducer,
  },
});

export default store;
