import { IUser } from './../interfaces/index';

import { atom } from 'jotai';
// import { atomWithStorage } from 'jotai/utils';

const cookies = require('js-cookie')
export const accidAtom = atom<number>(cookies.get('accid')|| 0);

export const busyAtom = atom<boolean>(true);

const initUser = { usertype: 'user', lastname: '', firstname: '', email: '', password: '',mobile:''};
export const userAtom = atom<IUser>(initUser);
