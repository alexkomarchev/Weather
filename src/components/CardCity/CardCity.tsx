import React from 'react';
import styles from './CardCity.module.scss'
import {faTemperatureEmpty,faWind,faDroplet,faTemperatureArrowUp} from "@fortawesome/free-solid-svg-icons"
import {useGetWeatherCityQuery} from "../../services/weather.api";
import {getNormalDate} from "../../helpers/card";
import IconInfo from "../IconInfo/IconInfo";
import {useAppSelector} from "../../toolkit/hook/hook";

const CardCity: React.FC = () => {

    const city = useAppSelector(state => state.city.eng)

    const {data} = useGetWeatherCityQuery(city)

    console.log(data)
    if (!data) return <div>Ожидание</div>

    return (
        <div className={styles.card_city}>
            <div className={styles.date}>{getNormalDate()}</div>
            <div className={styles.header}>
                <div className={styles.city}>{data?.name}</div>
                <div>{data?.weather[0].description}</div>
            </div>

            <IconInfo title={'Температура'} icon={faTemperatureEmpty} info={`${ Math.round(data?.main.temp)} °С`}/>

            <IconInfo title={'Ветер'} icon={faWind} info={`${Math.round(data?.wind.speed)} м/c`}/>

            <IconInfo title={'Влажность'} icon={faDroplet} info={`${Math.round(data!.main.humidity)} %`}/>

            <IconInfo title={'Давление'} icon={faTemperatureArrowUp} info={`${data!.main.pressure} Па`}/>

            <div>По ощущениям {Math.round(data!.main.feels_like)} °С</div>

        </div>
    );
};




export default CardCity;