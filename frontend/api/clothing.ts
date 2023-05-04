import axios from 'axios';
import { serverUrl } from '../utils/constants';
import { Clothing } from '../utils/types/types';

export async function  fetchClothing (data: Clothing) {
    try{
        const response = await axios.get(
            `${serverUrl}/clothing`,
            {params: data}
        );
        return response;
    } catch(e) {
        return e;
    }
}
