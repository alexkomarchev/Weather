import styles from './Header.module.scss'
import Title from "../Titlte/Title";
import Select from "../Select/Select";
import React from "react";
import {citySelect} from "../../constants/select";

const Header:React.FC = () => {
    return (
        <div className={styles.header}>
            <Title/>
            <Select  kit={citySelect}/>
        </div>
    );
};

export default Header;