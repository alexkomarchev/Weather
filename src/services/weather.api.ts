import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {API_KEY, baseURL} from "../constants/api";
import {CityResponce} from "../types/types";
import {FutureWeather} from "../types/future";


export const weatherApi = createApi({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({baseUrl: baseURL}),
    endpoints: build => ({
        getWeatherCity: build.query<CityResponce, string>({
            query: (city: string) => ({
                url: '/weather',
                params: {
                    q: city,
                    appid: API_KEY,
                    lang: 'ru',
                    units:'metric'
                }
            })
        }),
        getForecastCity: build.query<FutureWeather, string>({
            query: (city: string) => ({
                url: '/forecast',
                params: {
                    q: city,
                    appid: API_KEY,
                    lang: 'ru',
                    units:'metric',
                    cnt:5,
                }
            })
        })


    })
})
export const {useGetWeatherCityQuery,useGetForecastCityQuery} = weatherApi
