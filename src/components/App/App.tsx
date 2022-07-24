import styles from './App.module.scss'
import Header from "../Header/Header";
import {FC} from "react";
import CardCity from "../CardCity/CardCity";
import FieldPopular from "../FieldPopular/FieldPopular";
import {useGetForecastCityQuery} from "../../services/weather.api";
import {useAppSelector} from "../../toolkit/hook/hook";
import FutureWeather from "../FutureWeather/FutureWeather";
import Chart from "../Chart/Chart";
import {getTimeFromDate} from "../../helpers/card";

const App: FC = () => {

    const city = useAppSelector(state => state.city.eng)

    const units = useAppSelector(state => state.city.units)

    const {data} = useGetForecastCityQuery({city, units})

    const propData: any = data?.list.slice(0, 8).map(el =>
        ({name: getTimeFromDate(el.dt_txt), uv: Math.round(el.main.temp)})
    );

    console.log(1)

    return (
        <div className={styles.app}>
            <Header/>
            <div className={styles.main}>
                <CardCity/>
                <div className={styles.future}>
                    {data?.list.map(e => <FutureWeather press={e.main.pressure} wind={e.wind.speed}
                                                        humidity={e.main.humidity} key={e.dt_txt} date={e.dt_txt}
                                                        temp={e.main.temp}/>)}
                </div>
            </div>
            <div className={styles.grafic}>
                <Chart type={'Температура'}  list={data?.list || []}/>
                <Chart type={'Скорость ветра'} list={data?.list || []}/>
            </div>

            <FieldPopular/>

        </div>
    );
}

export default App;
