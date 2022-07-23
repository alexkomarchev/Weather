import styles from './IconInfo.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {FC} from "react";

interface IIconInfo {
    icon: IconProp,
    info: string | number | undefined;
    title:string;
}

const IconInfo: FC<IIconInfo> = ({icon, info,title}) => {
    return (
        <div className={styles.icon_info}>
            <div><FontAwesomeIcon className={styles.icon} icon={icon}/></div>
            <div className={styles.title}>{title} </div>
            <div className={styles.info}>{info}</div>
        </div>
    );
};

export default IconInfo;