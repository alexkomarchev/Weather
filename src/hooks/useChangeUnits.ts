import {useAppSelector} from "../toolkit/hook/hook";

interface IUnits {
    metric: string,
    imperial: string,
    standart: string,
}

export const useChangeUnits = (arr: IUnits) => {

    const {metric, imperial, standart} = arr

    const units = useAppSelector(state => state.city.units)

    switch (units) {
        case 'standart':
            return standart
            break;
        case 'imperial':
            return imperial
            break;
        case 'metric':
            return metric
            break;
    }

}