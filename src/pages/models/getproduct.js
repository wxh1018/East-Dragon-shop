import * as api from '../../until/api'

export default{
    namespace:'getproduct',
    state:{
        list:''
    },
    reducers:{
        change(state,{payload}){
            return {...state,...payload}
        }
    },
    effects:{
        *pro(payload,{call,put}){
            const result = yield call(api.getproducts,{})
        }
    }
}
