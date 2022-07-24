import {FC, memo} from 'react';
import {Area, AreaChart, XAxis} from 'recharts';
import styles from './Chart.module.scss'
import {getTimeFromDate} from "../../helpers/card";
import {FutureWeatherChart} from "../../types/future";

interface IChart {
    name: string,
    uv: number
}

const Chart: FC<FutureWeatherChart> = ({list, type}) => {

    const propData: IChart[] = type ==='Температура' ? list?.slice(0, 8).map(el =>
        ({name: getTimeFromDate(el.dt_txt), uv: Math.round(el.main.temp)})
    ): list?.slice(0, 8).map(el =>
        ({name: getTimeFromDate(el.dt_txt), uv: Math.round(el.wind.speed)}));

    return (
        <div className ={styles.root}>
            {type}
            <AreaChart className={styles.dia} width={550} height={200} data={propData}>
            <defs className={styles.area}>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="15%" stopColor="#235e97" stopOpacity={0.7}/>
                    <stop offset="100%" stopColor="#235e97" stopOpacity={0.5}/>
                </linearGradient>
            </defs>
            <XAxis axisLine={false} fontSize={15} tickSize={8} tickLine={false} dataKey="name"/>
            <Area className={styles.area}
                  label={{fill: '#235e97', position: 'insideBottomRight', fontWeight: '700', fontSize: '14px'}}
                  dataKey="uv" stroke="none" fillOpacity={0.9} fill="url(#colorUv)"/>
        </AreaChart></div>

    );

};

export default Chart;