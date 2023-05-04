import axios from 'axios';
import { serverUrl } from '../utils/constants';
import { UserData } from '../utils/types/types';

export async function  signupUser (data: UserData) {
    console.log(`${serverUrl}/user/register`, data)
    try{
        const response = await axios.post(
            `${serverUrl}/user/register`,
            data
        );
        return response;
    } catch(e) {
        console.log(e);
        return e;
    }
}

export async function loginUser (userName: string) {
    try{
        const response = await axios.post(
            `${serverUrl}/user/login`,
            {username: userName}
        );
        return response;
    } catch(e) {
        console.log(e);
        return e;
    }
}