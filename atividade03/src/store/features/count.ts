import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../config";

export interface CountState {
  citiesVotes: {
    [name: string]: number;
  };
}

export interface CountDataAction {
  key: string;
}

const initialState = {
  citiesVotes: {},
} as CountState;

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    resetAction(state, { payload }: { payload: CountDataAction[] }) {
      if (payload.length === 0) state.citiesVotes = {};
      else
        payload.forEach(({ key }) => {
          delete state.citiesVotes[key];
        });

      return state;
    },
    incrementAction(state, { payload }: { payload: CountDataAction }) {
      if (!state.citiesVotes[payload.key]) {
        state.citiesVotes[payload.key] = 1;
      } else state.citiesVotes[payload.key] += 1;

      return state;
    },
    decrementAction(state, { payload }: { payload: CountDataAction }) {
      if (!state.citiesVotes[payload.key]) {
        state.citiesVotes[payload.key] = 0;
      } else if (state.citiesVotes[payload.key] > 0)
        state.citiesVotes[payload.key] -= 1;

      return state;
    },
  },
});

export const { incrementAction, decrementAction, resetAction } =
  counterSlice.actions;

export const countSelector = (state: RootState) => state.count;

export const citiesVotesSelector = (state: RootState) =>
  state.count.citiesVotes;

export default counterSlice.reducer;
