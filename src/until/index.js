import axios from 'axios'

let baseurl = 'http://api.cat-shop.penkuoer.com'
// let baseurl =  'http://jx.xuzhixiang.top/ap/api'
export const GET = (url,params)=>{
    return axios.get(`${baseurl}${url}`,{params:params}).then((data)=>data) 
}
export const POST = (url,params)=>{
    return axios.post(`${baseurl}${url}`,params).then((data)=>data)
}