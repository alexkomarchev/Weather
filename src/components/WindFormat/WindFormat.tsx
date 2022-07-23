import {FC} from 'react';
import {useChangeUnits} from "../../hooks/useChangeUnits";

const WindFormat: FC = () => {

    const grad = useChangeUnits({metric: 'м/c', imperial: 'м/ч', standart: 'м/с'})

    return (
        <div>
            {grad}
        </div>
    );
};

export default WindFormat;