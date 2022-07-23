import styles from './IconInfo.module.scss'
import {FC} from "react";

interface IIconInfo {
    icon: string,
    info: string | number | undefined;
    title:string;
}

const IconInfo: FC<IIconInfo> = ({icon, info,title}) => {
    return (
        <div className={styles.icon_info}>
            <div><img className={styles.icon} src={icon}/></div>
            <div className={styles.title}>{title} </div>
            <div className={styles.info}>{info}</div>
        </div>
    );
};

export default IconInfo;