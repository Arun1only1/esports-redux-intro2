import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    email: "",
    password: "",
    randomText: "",
  },

  reducers: {
    setUserData: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },

    setRandomText: (state, action) => {
      console.log(action.payload);
      state.randomText = action.payload;
    },

    closeSnackbar: (state, action) => {
      state.open = false;
    },
  },
});

export const { setUserData, setRandomText } = userSlice.actions;

export default userSlice.reducer;
