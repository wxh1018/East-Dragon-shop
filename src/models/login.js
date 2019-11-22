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
            console.log(1);
            console.log(payload.payload);
            const result = yield call(api.loginapi,payload.payload)
            console.log(result);
            yield put({
                type:'change',
                payload:{
                    token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiO…I4NH0.EV55YCa7wY2doyAj7UBAsLQVyZ6AZ0Im3GPHrmWl5aU'
                }
            })
            location.href = '/home'
        }
    }
}