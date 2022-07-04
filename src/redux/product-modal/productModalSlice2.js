import { createSlice } from "@reduxjs/toolkit";

const initialState2 = {
  value: null,
};

export const productModalSlice2 = createSlice({
  name: "productModal2",
  initialState2,
  reducers: {
    set: (state, action) => {
      state.value = action.payload;
    },
    remove: (state) => {
      state.value = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { set, remove } = productModalSlice2.actions;

export default productModalSlice2.reducer;
