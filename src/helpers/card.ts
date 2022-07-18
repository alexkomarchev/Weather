export interface IDateTimeFormatOptions extends Intl.DateTimeFormatOptions {
    month?: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow';
    day?: 'numeric' | '2-digit';
    hour?: 'numeric' | '2-digit';
    minute?: 'numeric' | '2-digit';


}

const options: IDateTimeFormatOptions = {
    month: 'long',
    hour: 'numeric',
    minute: 'numeric',
    day: 'numeric',
};

export const getNormalDate = () => {
    return (new Date()).toLocaleString('ru', options)
}