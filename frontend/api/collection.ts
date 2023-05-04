import axios from 'axios';
import { serverUrl } from '../utils/constants';

export async function fetchCollection (data: string) {
    console.log(data)
    try{
        const response = await axios.get(
            `${serverUrl}/swipe/${data}`
        );
        return response;
    } catch(e) {
        console.log(e);
        return e;
    }
}
