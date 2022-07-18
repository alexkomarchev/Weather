import {configureStore} from "@reduxjs/toolkit";
import {weatherApi} from "../../services/weather.api";
import citySlice from "../slice";

export const store  = configureStore({
    reducer:{
        city: citySlice,
        [weatherApi.reducerPath]:weatherApi.reducer,

    }
})

export type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof store.getState>
