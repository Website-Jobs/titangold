import { IUser, IPartner } from './../interfaces/index';

import { atom } from 'jotai';
// import { atomWithStorage } from 'jotai/utils';

const cookies = require('js-cookie')
export const accidAtom = atom<number>(cookies.get('accid')|| 0);

export const busyAtom = atom<boolean>(true);

const initUser = {  lastname: '', firstname: '', email: '', password: '', mobile:'', address:'', country:'', role:'user', avatar:''};
export const userAtom = atom<IUser>(initUser);

export const newUserAtom = atom<IUser>(initUser);


const initPartner = {};

export const partnerAtom = atom<IPartner>(initUser);
export const newPartnerAtom = atom<IPartner>(initPartner);
