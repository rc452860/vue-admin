import axios from 'axios';
import {stringify} from 'qs'
let base = 'http://localhost:8080';

let client = "client"
let secret = "security"

axios.defaults.validateStatus = status =>{
    return status < 404;
}

export const requestLogin = params => { return axios.post(`${base}/oauth/token`, stringify({grant_type:"password",...params}), { auth: { username: client, password: secret }, withCredentials: true }) };

export const getUserList = params => { return axios.get(`${base}/user/list`, { params: params }); };

// export const requestLogin = params => { return axios.post(`${base}/login`, params).then(res => res.data); };

// export const getUserList = params => { return axios.get(`${base}/user/list`, { params: params }); };

// export const getUserListPage = params => { return axios.get(`${base}/user/listpage`, { params: params }); };

// export const removeUser = params => { return axios.get(`${base}/user/remove`, { params: params }); };

// export const batchRemoveUser = params => { return axios.get(`${base}/user/batchremove`, { params: params }); };

// export const editUser = params => { return axios.get(`${base}/user/edit`, { params: params }); };

// export const addUser = params => { return axios.get(`${base}/user/add`, { params: params }); };