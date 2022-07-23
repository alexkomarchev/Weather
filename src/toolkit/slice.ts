import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    eng: 'Moscow',
    units: 'metric'
}

export const citySlice = createSlice({
    name: 'city',
    initialState,
    reducers: {
        setCity: (state, action: PayloadAction<string>) => {
            state.eng = action.payload
        },
        changeUnits: (state) => {
            if (state.units === 'metric') state.units = ('imperial')
            else {
                state.units = ('metric')
            }
        }
    }
})

export const {setCity,changeUnits} = citySlice.actions

export default citySlice.reducer