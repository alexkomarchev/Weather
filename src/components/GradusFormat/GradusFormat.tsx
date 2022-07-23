import {FC} from 'react';
import {useChangeUnits} from "../../hooks/useChangeUnits";

const GradusFormat:FC = () => {

    const grad = useChangeUnits({metric:'°C',imperial:'℉',standart:'K'})

    return (
        <div>
            {grad}
        </div>
    );
};

export default GradusFormat;