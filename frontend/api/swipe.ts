import axios from 'axios';
import { serverUrl } from '../utils/constants';
import { Swipe } from '../utils/types/types';

export async function  swipe (data: Swipe) {
    try{
        const response = await axios.post(
            `${serverUrl}/swipe`,
            data
        );
        return response;
    } catch(e) {
        return e;
    }
}
