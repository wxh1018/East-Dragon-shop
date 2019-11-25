import * as api from '../until/api'

export default{
    namespace:'login',
    state:{
        userName:'',
        password:'',
        token:'',
        defval:'admin',
        grid1:{title:'1',first:'代发货订单',second:'带结算订单',third:"已成交订单"},
    },
    reducers:{
        change(state,{payload}){
            return {...state,...payload}
        }
    },
    effects:{
        *tologin(payload,{call,put}){
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