import axios from 'axios';
let baseUrl='http://api.cat-shop.penkuoer.com'

export const GET=(url,params)=>{
    return axios.get(`${baseUrl}${url}`,{params:params}).then((data)=>{
        return data
    })
}


export const POST=(url,params)=>{
    return axios.post(`${baseUrl}${url}`,params).then(data=>data)
}

export const PUT=(url,params)=>{
    return axios.put(`${baseUrl}${url}`,params).then(data=>data)
}

export const DELETE=(url,params)=>{
    return axios.delete(`${baseUrl}${url}`,params).then(data=>data)
}
