import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {API_KEY, baseURL} from "../constants/api";
import {CityResponce} from "../types/types";
import {FutureWeather} from "../types/future";

interface IArg{
    city:string,
    units:string
}

export const weatherApi = createApi({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({baseUrl: baseURL}),
    endpoints: build => ({
        getWeatherCity: build.query<CityResponce, IArg>({
            query: ({city,units}) => ({
                url: '/weather',
                params: {
                    q: city,
                    appid: API_KEY,
                    lang: 'ru',
                    units:units
                }
            })
        }),
        getForecastCity: build.query<FutureWeather, IArg>({
            query: ({city,units}) => ({
                url: '/forecast',
                params: {
                    q: city,
                    appid: API_KEY,
                    lang: 'ru',
                    units:units,

                }
            })
        })


    })
})
export const {useGetWeatherCityQuery,useGetForecastCityQuery} = weatherApi
