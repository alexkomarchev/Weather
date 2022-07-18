import styles from './Select.module.scss'
import React from "react";
import {useAppDispatch, useAppSelector} from "../../toolkit/hook/hook";
import {setCity} from "../../toolkit/slice";

export type City = {
    rus: string,
    eng: string,
}

type IKit = {
    option: City[]
}

interface ISelect {
    kit: IKit;
}

const Select: React.FC<ISelect> = ({kit}) => {

    const dispatch = useAppDispatch()

    const city = useAppSelector(state => state.city.eng )

    const changeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setCity(e.target.value))
    }

    return (
        <select onChange={(e) => changeSelect(e)} value={city} className={styles.select}>
            {kit.option.map((el, i) => <option key={i} value={el.eng}>{el.rus}</option>)}
        </select>
    );
};

export default Select;