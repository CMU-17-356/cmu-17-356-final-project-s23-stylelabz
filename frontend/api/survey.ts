import axios from 'axios';
import { serverUrl } from '../utils/constants';
import { SurveyResponse } from '../utils/types/types';

export async function  saveSurvey (data: SurveyResponse) {
    try{
        const response = await axios.post(
            `${serverUrl}/survey`,
            data
        );
        return response;
    } catch(e) {
        return e;
    }
}
