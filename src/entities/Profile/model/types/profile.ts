import { Country, Currency } from 'shared/const/common';

export interface IProfile {
    first: string,
    lastname: string,
    age: '30',
    currency: Currency,
    country: Country,
    city: string,
    username: string,
    avatar: string
}

export interface IProfileSchema {
    data?: IProfile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
}
