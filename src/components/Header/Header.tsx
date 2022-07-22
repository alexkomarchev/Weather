import styles from './Header.module.scss'
import Title from "../Titlte/Title";
import React from "react";
import Search from "../search/Search";

const Header:React.FC = () => {
    return (
        <div className={styles.header}>
            <Title/>
            <Search/>
        </div>
    );
};

export default Header;