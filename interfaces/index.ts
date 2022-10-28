import { ReactNode } from 'react';
export interface Props {
    children?: ReactNode;
}

export interface ResponseFunctions {
    GET?: Function;
    POST?: Function;
}

export interface IUser {
    _id?: string;
    id?: string;
    accid?: number;
    avatar?: string;
    role?: string;
    partnerid?:string,
    lastname?: string;
    firstname?: string;
    email?: string;
    mobile?:string;
    address?:string;
    country?:string;
    password?: string;
}

export interface IPartner {
    _id?: string;
    id?: string;
    avatar?: string;
    role?: string;
    lastname?: string;
    firstname?: string;
    email?: string;
    mobile?:string;
    address?:string;
    country?:string;
    gold?: string;
    amount?: string;
    created?: string;
}


export interface IMeta {
    title?: string;
    description?:string;
    keywords?: string;
    image?: string;
    color?: string;
    author?: string;
    robots?: string;
}