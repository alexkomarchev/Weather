import {FC} from 'react';
import Arrow from '../../assets/arrow.svg'
import styles from './popularForecast.module.scss'
import {useDispatch} from "react-redux";
import {setCity} from "../../toolkit/slice";


interface IPopular {
    svg: string,
    country: string,
    city: string,
}


const PopularForecast: FC<IPopular> = ({svg, country, city}) => {
    const dispatch = useDispatch()


    const clickCity = () => {
        dispatch(setCity(city))
    }


    return (
        <div onClick={clickCity} className={styles.popular}>
            <img className={styles.icon} src={svg} alt=""/>
            <div className={styles.country}>{country}</div>
            <div className={styles.city}>{city}</div>
            <img className={styles.arrow} src={Arrow}/>
        </div>
    );
};

export default PopularForecast;