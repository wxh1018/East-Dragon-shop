import * as API from './index'

export const loginapi = (params)=>{
    return API.POST('/api/v1/auth/manager_login',params)
}   

export const userRegist = (params)=>{
    return API.POST('/api/v1/auth/reg',params)
}