export default{
    namespace:'home',
    state:{
        list:[{type:1,num:666,content:'店铺会员'},{type:2,num:777,content:'总金额'},{type:3,num:888,content:'总订单'},{type:4,num:999,content:'交易记录'}],
        name:'home',
        token:localStorage.getItem('token')
    },
    reducers:{
        change(state,{payload}){
            return {...state,...payload}
        }
    },
    effects:{

    }
}