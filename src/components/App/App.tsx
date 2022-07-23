import styles from './App.module.scss'
import Header from "../Header/Header";
import React from "react";
import CardCity from "../CardCity/CardCity";
import FieldPopular from "../FieldPopular/FieldPopular";
import {useGetForecastCityQuery} from "../../services/weather.api";
import {useAppSelector} from "../../toolkit/hook/hook";
import FutureWeather from "../FutureWeather/FutureWeather";

const App = () => {
    const city = useAppSelector(state => state.city.eng)

    const units = useAppSelector(state => state.city.units)

    const {data} = useGetForecastCityQuery({city,units})

    return (
        <div className={styles.app}>
            <Header/>
            <div className={styles.main}>
                <CardCity/>
                <div className={styles.future}>
                    {data?.list.map(e => <FutureWeather wind ={e.wind.speed} humidity={e.main.humidity} key={e.dt_txt} date={e.dt_txt} temp={e.main.temp}/>)}
                </div>

            </div>
            <FieldPopular/>

        </div>
    );
}

export default App;
