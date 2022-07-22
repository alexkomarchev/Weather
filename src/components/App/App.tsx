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

    const {data} = useGetForecastCityQuery(city)
    console.log(data)
    // console.log(typeof data?.list[0].main.temp)
    // const a = new Date().getDate()
    // console.log(typeof a)
    // console.log((data!.list[0].dt_txt).slice(8,10))
    // console.log(data?.list.filter(el =>+((el.dt_txt).slice(8,10)) === a))

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
