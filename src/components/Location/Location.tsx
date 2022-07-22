import {FC} from 'react';
import styles from './Location.module.scss'
import {ReactComponent as Loc} from '../../assets/location.svg'

type Location = {
    city: string,
}


const Location: FC<Location> = ({city}) => {

    return (
        <div className={styles.location}>
            <Loc className = {styles.icon} />
            <div>{city}</div>
        </div>
    );
};

export default Location;