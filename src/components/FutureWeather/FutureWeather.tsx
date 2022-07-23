import {FC} from 'react';
import styles from './FutureWeather.module.scss'
import {getNormalDate} from "../../helpers/card";
import temp1 from '../../assets/temp.png'
import gig from '../../assets/gig.png'
import davl from '../../assets/davl.png'
import wind1 from '../../assets/wind.png'
import GradusFormat from "../GradusFormat/GradusFormat";
import WindFormat from "../WindFormat/WindFormat";

interface IFuture {
    date: string,
    temp: number,
    humidity: number,
    wind: number,
    press:number;
}

const FutureWeather: FC<IFuture> = ({date, temp, humidity, wind,press}) => {
    return (
        <div className={styles.root}>
            <div className={styles.date}>
                {getNormalDate(new Date(Date.parse(date)))}
            </div>
            <div className={styles.temp}>
                <img className={styles.icon} src={temp1}/>
                {Math.round(temp)}
                &nbsp;
                <GradusFormat/>
            </div>
            <div className={styles.temp}>
                <img className={styles.icon} src={gig}/>
                {humidity} %
            </div>
            <div className={styles.temp}>
                <img className={styles.icon} src={wind1}/>
                {Math.round(wind)}
                &nbsp;
                <WindFormat/>
            </div>
            <div className={styles.temp}>
                <img className={styles.icon} src={davl}/>
                {press}
                &nbsp;
                гПа
            </div>
        </div>
    );
};

export default FutureWeather;