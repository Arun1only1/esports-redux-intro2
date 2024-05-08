import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import snackbarReducer from "./slices/snackbarSlice";

const reduxStore = configureStore({
  reducer: {
    user: userReducer,
    snackbar: snackbarReducer,
  },
});

export default reduxStore;
