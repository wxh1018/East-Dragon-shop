import * as API from './index'

export const loginapi = (params)=>{
    return API.POST('/api/v1/auth/manager_login',params)
}   

export const userRegist = (params)=>{
    return API.POST('/api/v1/auth/reg',params)
}
// 1. 获取商品列表
export const getproducts = (params)=>{
    return API.HEADPOST('/api/v1/admin/products',params)
}
