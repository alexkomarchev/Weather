import React, {FC, useState} from 'react';
import styles from './Search.module.scss'
import search from '../../assets/search.svg'
import {useDispatch} from "react-redux";
import {setCity} from "../../toolkit/slice";
const Search:FC = () => {

    const dispatch = useDispatch()

    const [value,setValue] = useState('')

    const searchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    const goSearch = () => {
        dispatch(setCity(value))
    }

    return (
        <div className={styles.search}>
            <input onChange={(e) => searchChange (e)} placeholder='Search place' className={styles.input}/>
            <img onClick={goSearch} className={styles.icon} src={search}/>

        </div>


    );
};

export default Search;