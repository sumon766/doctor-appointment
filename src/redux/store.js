import { configureStore } from "@reduxjs/toolkit";

import UISlice from "./UISlice";

const store = configureStore({
  reducer: {
    ui: UISlice,
  },
});

export default store;
