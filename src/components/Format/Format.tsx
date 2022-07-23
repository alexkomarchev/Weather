import {FC} from 'react';
import styles from './Format.module.scss'
import {useDispatch} from "react-redux";
import {changeUnits} from "../../toolkit/slice";
import {useAppSelector} from "../../toolkit/hook/hook";


const Format: FC = () => {

    const units = useAppSelector(state => state.city.units)

    const dispatch = useDispatch()

    const goClick = (units:string):void => {
        dispatch(changeUnits(units))

    }

    return (
        <div className={styles.root}>
            <div onClick={() => goClick('metric')} className={ units === 'metric' ? styles.grad_active : styles.grad}>°C</div>
            |
            <div onClick={() => goClick('imperial')} className={ units === 'imperial' ? styles.far_active : styles.far}>℉</div>
            |
            <div onClick={() => goClick('standart')} className={ units === 'standart' ? styles.far_active : styles.far}>K</div>
        </div>
    );
};

export default Format;