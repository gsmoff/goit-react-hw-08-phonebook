// import { axiosInstance, setTokenAuth } from '../../api/api';

// export const signInUser = body => {
//     return axiosInstance.post('/users', body);
// };

// export const loginUser = async body => {
//     const { data } = await axiosInstance.post('auth/login', body);
//     setTokenAuth(`Bearer ${data.access_token}`);
//     return data;
// };

// export const getProfile = async () => {
//     const { data } = await axiosInstance('/auth/profile');
//     return data;
// };
import { axiosInstance, setTokenAuth } from '../../api/api';

export const signInUser = body => {
    return axiosInstance.post('/users/signup', body);
};

export const loginUser = async body => {
    const { data } = await axiosInstance.post('/users/login', body);
    setTokenAuth(`Bearer ${data.token}`);
    return data;
};
//GET
export const getProfile = async () => {
    const { data } = await axiosInstance('/users/current')
    return data
};
