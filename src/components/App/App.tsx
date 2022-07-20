import styles from './App.module.scss'
import Header from "../Header/Header";
import React from "react";
import {Route, Routes} from "react-router-dom";
import Main from "../../pages/main";
import View from "../../pages/view";

const App = () => {


    fetch('https://autocomplete.travelpayouts.com/places2?locale=en&types[]=city&term=new').then(res => res.json()).then(res => console.log(res))

    return (
        <div className={styles.app}>
            <Header/>
            <Routes>
                <Route path="/" element={<Main/>}></Route>
                <Route path="/view" element={<View/>}></Route>
            </Routes>

        </div>
    );
}

export default App;
