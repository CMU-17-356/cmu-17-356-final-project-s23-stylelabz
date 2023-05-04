import axios from 'axios';
import { serverUrl } from '../utils/constants';
import { Clothing } from '../utils/types/types';

export async function  fetchRecommendations (data: Clothing) {
    try{
        const response = await axios.get(
            `${serverUrl}/recommendation`,
            {params: data}
        );
        return response;
    } catch(e) {
        return e;
    }
}
