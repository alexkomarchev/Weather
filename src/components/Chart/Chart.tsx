import {FC} from 'react';
import {CartesianGrid, Line, LineChart, XAxis, YAxis} from 'recharts';
import styles from './Chart.module.scss'

export interface IChart {
    name:string,
    uv:number
}

interface Idata {
    data:IChart[]
}


const Chart: FC<Idata> = ({data}) => {

    return (
        <LineChart className={styles.dia} width={900} height={200} data={data}>
            <Line type="monotone" dataKey="uv" stroke="#8884d8  " />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
        </LineChart>
    );

};

export default Chart;