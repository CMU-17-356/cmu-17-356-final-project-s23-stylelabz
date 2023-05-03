import axios from 'axios';
import { serverUrl } from '../utils/constants';
import { LoginData, UserData } from '../utils/types/types';

export async function  signupUser (data: UserData) {
    try{
        const response = await axios.post(
            `${serverUrl}/user`,
            data
        );
        return response;
    } catch(e) {
        return e;
    }
}

export async function loginUser (userName: string) {
    try{
        const response = await axios.get(
            `${serverUrl}/user/userName=${userName}`
        );
        return response;
    } catch(e) {
        return e;
    }
}