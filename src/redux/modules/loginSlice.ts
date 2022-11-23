import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  [key: string]: string;
};

const initialState = {
  id: "0",
  password: "0"
} as InitialState;

type Payload = {
  key: string;
  val: string;
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setState: {
      reducer: (state, action: PayloadAction<Payload>) => {
        const { key, val } = action.payload;
        // eslint-disable-next-line no-param-reassign
        state[key] = val;
      },
      prepare: (payload: Payload) => ({ payload })
    }
  }
});

export const { setState } = loginSlice.actions;
export default loginSlice.reducer;
