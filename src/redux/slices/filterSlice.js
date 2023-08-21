import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  sort: {
    name: "популярноти(DESC)",
    property: "rating",
    order: "desc",
  },
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryId(state, action) {
      console.log(state, "State", action, "Action");
      state.categoryId = action.payload;
    },
  },
});

export const { setCategoryId } = filterSlice.actions;

export default filterSlice.reducer;
