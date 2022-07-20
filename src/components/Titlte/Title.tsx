import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDroplet} from "@fortawesome/free-solid-svg-icons"
import styles from './Title.module.scss'
import React from "react";



const Title:React.FC = () => {
    return (
        <div className={styles.title}>
            <FontAwesomeIcon className={styles.icon} icon={faDroplet}/>
            <div className={styles.text}>Cuacane</div>

        </div>
    );
};

export default Title;