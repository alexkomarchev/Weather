import styles from './App.module.scss'
import Header from "../Header/Header";
import React from "react";
import CardCity from "../CardCity/CardCity";

const App = () => {


    return (
        <div className={styles.app}>
            <Header/>
            <CardCity/>
        </div>
    );
}

export default App;
