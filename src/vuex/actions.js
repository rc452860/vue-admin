//test
import { requestLogin } from '../api/api';

export const increment = ({commit}) => {
    commit('INCREMENT')
}
export const decrement = ({commit}) => {
    commit('DECREMENT')
}


export const login = ({commit,state},data)=>{
    requestLogin({username:data.username,password:data.password}).then(data=>{
        let {access_token} = data;
        commit("LOGIN",{token:access_token})
    })
}