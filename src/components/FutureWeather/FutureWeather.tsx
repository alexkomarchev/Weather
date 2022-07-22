import React, {FC} from 'react';
import styles from './FutureWeather.module.scss'
import {getTimeFromDate} from "../../helpers/card";
import temp1 from '../../assets/temp.png'
import gig from '../../assets/gig.png'
import wind1 from '../../assets/wind.png'
import davl from '../../assets/davl.png'

interface IFuture {
    date: string,
    temp: number,
    humidity:number,
    wind:number,
}

const FutureWeather: FC<IFuture> = ({date, temp, humidity,wind}) => {
    return (
        <div className={styles.root}>
            <div className={styles.date}>{getTimeFromDate(date)}</div>

            <div className={styles.temp}>
                <img className={styles.icon} src={temp1}/>
                {temp}°
            </div>
            <div className={styles.temp}>
                <img className={styles.icon} src={gig}/>
                {humidity} %
            </div>
            <div className={styles.temp}>
                <img className={styles.icon} src={wind1}/>
                {wind} м/c
            </div>
            <div className={styles.temp}>
                <img className={styles.icon} src={davl}/>
                {wind} м/c
            </div>
        </div>
    );
};

export default FutureWeather;