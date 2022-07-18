import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {City} from "../components/Select/Select";
import {RootState} from "./store/store";


interface IState {
    city: City
}

const initialState = {
    eng: 'Moscow',
}

export const citySlice = createSlice({
    name: 'city',
    initialState,
    reducers: {
        setCity: (state, action: PayloadAction<string>) => {
            state.eng = action.payload
        }
    }
})

export const {setCity} = citySlice.actions

export const citySelect = (state: RootState) => state.city.eng

export default citySlice.reducer