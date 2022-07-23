import React from 'react';
import styles from './CardCity.module.scss'
import {useGetWeatherCityQuery} from "../../services/weather.api";
import vision from '../../assets/vision.png'
import gig from '../../assets/gig.png'
import wind1 from '../../assets/wind.png'
import davl from '../../assets/davl.png'
import IconInfo from "../IconInfo/IconInfo";
import {useAppSelector} from "../../toolkit/hook/hook";
import Location from "../Location/Location";
import Format from "../Format/Format";
import GradusFormat from "../GradusFormat/GradusFormat";

const CardCity: React.FC = () => {

    const city = useAppSelector(state => state.city.eng)

    const units = useAppSelector(state => state.city.units)

    const {data} = useGetWeatherCityQuery({city, units})

    const windFormat = units === 'imperial'  ? 'м/ч' : 'м/c'

    if (!data) return <div>Ожидание</div>

    return (
        <div className={styles.card_city}>
            <div className={styles.header}>
                <Location city={data?.name}/>
                <Format/>
            </div>
            <div className={styles.main}>
                <div className={styles.temp}> {Math.round(data?.main.temp)}
                    <div className={styles.grad}><GradusFormat/></div>
                </div>
                <div className={styles.desc}>{data?.weather[0].description}</div>
            </div>
            <div className={styles.info}>

                <IconInfo title={'Ветер'} icon={wind1} info={`${Math.round(data?.wind.speed)} ${windFormat}`}/>

                <IconInfo title={'Видимость'} icon={vision} info={`${data?.visibility / 1000} км`}/>

                <IconInfo title={'Влажность'} icon={gig} info={`${Math.round(data!.main.humidity)} %`}/>

                <IconInfo title={'Давление'} icon={davl} info={`${data!.main.pressure} гПа`}/>
            </div>

        </div>
    );
};


export default CardCity;