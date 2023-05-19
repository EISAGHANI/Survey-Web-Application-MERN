import axios from 'axios';
import { FETCH_USER } from './types';


export const fetchUser = () => async dispatch => {
        const res = axios.get('/api/current_user')
        dispatch({ type: FETCH_USER, payload: (await res).data});
};

export const handleToken = token => async dispatch => {
    const res = axios.post('/api/stripe', token);
    dispatch({ type: FETCH_USER, payload: (await res).data})
};
