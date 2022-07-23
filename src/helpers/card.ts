export interface IDateTimeFormatOptions extends Intl.DateTimeFormatOptions {
    month?: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow';
    day?: 'numeric' | '2-digit';
    hour?: 'numeric' | '2-digit';
    minute?: 'numeric' | '2-digit';
    weekday: 'long',


}

const options: IDateTimeFormatOptions = {
    hour: 'numeric',
    weekday: 'long',
    minute: 'numeric',

};

// export const getNormalDate = () => {
//     return (new Date()).toLocaleString('ru', options)
// }
export const getNormalDate = (date:any) => {
    return date.toLocaleString('ru', options)
}


export const getTimeFromDate = (date:string):string => {
    return date.slice(11,16)
}