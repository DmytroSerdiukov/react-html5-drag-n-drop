import { createSlice } from "@reduxjs/toolkit";

export interface CardsState {
  cards: any;
}

const initialState: CardsState = {
  cards: [
    {
      id: "ddsadasdsadas",
      title: "title #1",
    },
    {
      id: "123aawdsasd",
      title: "title #2",
    },
    {
      id: "123aawdsas1111d",
      title: "title #3",
    },
    {
      id: "123aawds2322",
      title: "title #4",
    },
    {
      id: "123aaw11dddds2322",
      title: "title #5",
    },
  ],
};

export const cardsReducer = createSlice({
  name: "cards",
  initialState,
  reducers: {
    changeElements: (state: any, action: any) => {
      const { id, targetId } = action.payload;
      const idIndex = state.cards.findIndex((el: any) => el.id === id);
      const targetIdIndex = state.cards.findIndex(
        (el: any) => el.id === targetId
      );
      var element = state.cards[idIndex];
      state.cards.splice(idIndex, 1);
      state.cards.splice(targetIdIndex, 0, element);
    },
  },
});

export const { changeElements } = cardsReducer.actions;

export default cardsReducer.reducer;
