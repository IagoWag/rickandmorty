import api from '../../api';

export const getData = async () => {
    const {data} = await api.get('/character');
    return data;
};
