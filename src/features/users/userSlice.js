import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", name: "Amanda", email: "amanda@mail.com" },
  { id: "2", name: "John", email: "John@mail.com" },
];

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      console.log(action);
    },
  },
});
export const { addUser } = userSlice.actions;
export default userSlice.reducer;
