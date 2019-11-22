import * as api from '../until/api'

export default{
    namespace:'login',
    state:{
        userName:'',
        password:'',
        token:''

    },
    reducers:{
        change(state,{payload}){
            return {...state,...payload}
        }
        
    },
    effects:{
        *tologin(payload,{call,put}){
            console.log(payload.payload);
            const result = yield call(api.adminLogin,payload.payload)
            console.log(result);
            yield put({
                type:'change',
                payload:{
                    token:result.data.token
                }
            })
            localStorage.setItem('token',result.data.token)
        }
    }
}