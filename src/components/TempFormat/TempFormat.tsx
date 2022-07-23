import {FC} from 'react';
import styles from './TempFormat.module.scss'
import {useDispatch} from "react-redux";
import {changeUnits} from "../../toolkit/slice";
import {useAppSelector} from "../../toolkit/hook/hook";


const TempFormat: FC = () => {

    const units = useAppSelector(state => state.city.units)

    const dispatch = useDispatch()

    const goClick = () => {
        dispatch(changeUnits())
    }

    return (
        <div className={styles.root}>
            <div onClick={goClick} className={ units === 'metric' ? styles.grad_active : styles.grad}>°C</div>
            |
            <div onClick={goClick} className={ units === 'imperial' ? styles.far_active : styles.far}>℉</div>
        </div>
    );
};

export default TempFormat;