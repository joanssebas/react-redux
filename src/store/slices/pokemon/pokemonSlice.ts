import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";
import {PokemonApp} from "../../../PokemonApp";

export interface PokemonState {
  page: number;
  pokemons: string[];
  isLoading: boolean;
}
const initialState: PokemonState = {
  page: 0,
  pokemons: [],
  isLoading: false,
};
export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    startLoadingPokemons: (state) => {
      state.isLoading = true;
    },
    setPokemons: (state, action) => {
      state.isLoading = false;
      state.page = action.payload.page;
      state.pokemons = action.payload.pokemons;
    },
  },
});
// Action creators are generated for each case reducer function
export const {startLoadingPokemons, setPokemons} = pokemonSlice.actions;
