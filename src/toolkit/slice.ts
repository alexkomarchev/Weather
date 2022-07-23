import {createSlice, PayloadAction} from "@reduxjs/toolkit";


const format = localStorage.getItem('format')

const city = localStorage.getItem('city')

const initialState = {
    eng: city ||'Moscow',
    units: format || 'metric'
}

export const citySlice = createSlice({
    name: 'city',
    initialState,
    reducers: {
        setCity: (state, {payload}: PayloadAction<string>) => {
            state.eng = payload
            localStorage.setItem("city",payload)

        },
        changeUnits: (state, {payload}:PayloadAction<string>) => {
            state.units = payload
            localStorage.setItem("format",payload)
        }
    }
})

export const {setCity,changeUnits} = citySlice.actions

export default citySlice.reducer