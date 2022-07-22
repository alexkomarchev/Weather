import {FC} from 'react';
import {Link} from "react-router-dom";
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
            <Link  className={styles.link} to='/view'><img className={styles.arrow} src={Arrow}/></Link>
        </div>
    );
};

export default PopularForecast;