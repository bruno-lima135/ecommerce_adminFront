import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    saveUserData(state, action) {
      state.token = action.payload.token;
      state.userId = action.payload.userId;
    },
    logOut(state, action) {
      state.token = "";
      state.userId = "";
    },
  },
});

const { reducer, actions } = userSlice;
export const { saveUserData, logOut } = actions;
export default reducer;
