import {FC} from 'react';
import styles from './Search.module.scss'
import search from '../../assets/search.svg'
const Search:FC = () => {
    return (
        <div className={styles.search}>
            <img className={styles.icon} src={search}/>
            <input placeholder='Search place' className={styles.input}/>
            <div className={styles.text}>Search</div>
        </div>


    );
};

export default Search;