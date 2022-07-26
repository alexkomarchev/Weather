
import styles from './Title.module.scss'
import React from "react";



const Title:React.FC = () => {
    return (
        <div className={styles.title}>
            <div className={styles.text}>Cuacane</div>

        </div>
    );
};

export default Title;