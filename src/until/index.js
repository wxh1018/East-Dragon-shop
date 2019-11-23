import axios from 'axios'

// let baseurl = 'http://api.cat-shop.penkuoer.com'
// let baseurl =  'http://jx.xuzhixiang.top/ap/api'
let baseurl = 'http://60.205.188.207:8010'
const token = localStorage.getItem('token')
axios.defaults.headers.common["authorization"] ='Bearer '+ token;
export const GET = (url,params)=>{
    return axios.get(`${baseurl}${url}`,{params:params}).then((data)=>data) 
}
export const POST = (url,params)=>{
    return axios.post(`${baseurl}${url}`,params).then((data)=>data)
}
export const HEADPOST = (url,params)=>{
    return axios.post(`${baseurl}${url}`,params).then((data)=>data)
}
export const HEADGET = (url,params)=>{
    return axios.get(`${baseurl}${url}`,params
    ).then((data)=>data)
}
export const DELETE = (url,params)=>{
    return axios.post(`${baseurl}${url}`,params)
}
export const PUT = (url,params)=>{
    return axios.post(`${baseurl}${url}`,params).then((data)=>data)
}