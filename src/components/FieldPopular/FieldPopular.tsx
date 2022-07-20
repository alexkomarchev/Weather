import {FC} from 'react';
import styles from './FieldPopular.module.scss'
import {popular} from "../../constants/popular";
import PopularForecast from "../PopularForecast/popularForecast";


const FieldPopular: FC = () => {
    return (
        <div className={styles.world_forecast}>
            <h1>World Forecast</h1>
            <div className={styles.popular_forecast}>

                {popular.map(el => <PopularForecast key={el.svg} svg={el.svg} country={el.country} city={el.city}/>)}
            </div>
        </div>


    );
};

export default FieldPopular;