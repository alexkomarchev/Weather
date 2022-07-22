import React from 'react';
import styles from './CardCity.module.scss'
import {faDroplet, faEyeLowVision, faTemperatureArrowUp, faWind} from "@fortawesome/free-solid-svg-icons"
import {useGetWeatherCityQuery} from "../../services/weather.api";
import {getNormalDate} from "../../helpers/card";
import IconInfo from "../IconInfo/IconInfo";
import {useAppSelector} from "../../toolkit/hook/hook";
import Location from "../Location/Location";

const CardCity: React.FC = () => {

    const city = useAppSelector(state => state.city.eng)

    const {data} = useGetWeatherCityQuery(city)

    if (!data) return <div>Ожидание</div>

    return (
        <div className={styles.card_city}>

            <div className={styles.header}>
                <Location city={data?.name}/>
                <div className={styles.date}>{getNormalDate()}</div>
            </div>
            <div className={styles.main}>
                <div className={styles.temp}> {Math.round(data?.main.temp)}<div className={styles.grad}>°</div></div>
                <div className={styles.desc}>{data?.weather[0].description}</div>
            </div>
            <div className={styles.info}>

                <IconInfo title={'Ветер'} icon={faWind} info={`${Math.round(data?.wind.speed)} м/c`}/>

                <IconInfo title={'Видимость'} icon={faEyeLowVision} info={`${data?.visibility / 1000} км`}/>

                <IconInfo title={'Влажность'} icon={faDroplet} info={`${Math.round(data!.main.humidity)} %`}/>

                <IconInfo title={'Давление'} icon={faTemperatureArrowUp} info={`${data!.main.pressure} гПа`}/>
            </div>

        </div>
    );
};


export default CardCity;