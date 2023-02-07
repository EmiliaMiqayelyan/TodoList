import { createSlice } from "@reduxjs/toolkit";

export const todoslice = createSlice({
  name: "todos",
  initialState: {
    value: [],
  },
  reducers: {
    create:(state, action) => {
        state.value.push(action.payload)
        console.log(action);
    },

    remove:(state, action) => {
        state.value = state.value.filter((t) => t.id !== action.payload)
    }
  },
});

export const { create,  remove } = todoslice.actions;
export default todoslice.reducer;
