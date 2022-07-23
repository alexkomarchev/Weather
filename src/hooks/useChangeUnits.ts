import {useAppSelector} from "../toolkit/hook/hook";

interface IUnits {
    metric:string,
    imperial:string,
}

export const useChangeUnits = (arr:IUnits) => {

    const {metric,imperial} = arr

    const units = useAppSelector(state => state.city.units)

    return  units === 'imperial' ? imperial : metric



}