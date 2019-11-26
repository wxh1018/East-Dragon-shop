import axios from 'axios'

// let baseurl = 'http://api.cat-shop.penkuoer.com'
// let baseurl =  'http://jx.xuzhixiang.top/ap/api'
// let baseurl = 'http://60.205.188.207:8010'
// http://60.205.188.207:8010/api/v1/admin/products?name='雪景'&coverImg=http://up.enterdesk.com/edpic/41/88/16/418816c05957155da73031963316a53c.jpg&descriptions=零星&quantity=inifity&price=priceless
let baseurl = 'http://192.168.19.2:3000'
const token = localStorage.getItem('token')
axios.defaults.headers.common["authorization"] ='Bearer '+ token;
export const GET = (url,params)=>{
    return axios.get(`${baseurl}${url}`,{params:params}).then((data)=>data) 
}
export const POST = (url,params)=>{
    return axios.post(`${baseurl}${url}`,params).then((data)=>data)
}
export const HEADPOST = (url,params)=>{
    return axios.post(`${baseurl}${url}`,params).then(data=>data)
}
export const HEADGET = (url,params)=>{
    return axios.get(`${baseurl}${url}`,{params:params}).then(data=>data)
}
export const DELETE = (url,params)=>{
    return axios.delete(`${baseurl}${url}${params}`)
}
export const PUT = (url,params)=>{
    return axios.put(`${baseurl}${url}${params.id}`,params).then((data)=>data)
}