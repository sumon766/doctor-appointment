import { configureStore } from "@reduxjs/toolkit";
import doctorListReducer from "./doctor_list_slice";
import appointmentReducer from "./appointmentSlice";
import authSlice from "./authSlice";

const store = configureStore({
  reducer: {
    appointment: appointmentReducer,
    auth: authSlice,
    doctorList: doctorListReducer,
  },
});

export default store;
