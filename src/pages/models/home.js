import * as api from '../../until/api'
import { push } from 'connected-react-router'
export default{
    namespace:'home',
    state:{
        list:[{type:1,num:666,content:'店铺会员'},{type:2,num:777,content:'总金额'},{type:3,num:888,content:'总订单'},{type:4,num:999,content:'交易记录'}],
        list1:{num:'暂无会员',content:"店铺会员"},
        list2:{num:'',content:"总金额"},
        list3:{num:'',content:"总订单"},
        list4:{num:'',content:"交易记录"},
        name:'杰森斯坦森',
        a:[{type:1,name:'Tom'},{type:2,name:'Jack'}],

        token:localStorage.getItem('token'),
        grid1:[{type:1,title:'订单统计信息',first:'代发货订单',second:'带结算订单',third:"已成交订单"},{type:2,title:'商品统计信息',first:'代发货订单',second:'带结算订单',third:"已成交订单"},
    ],
        
    },
    reducers:{
        change(state,{payload}){
            return {...state,...payload}
        },
        push(state,{payload}){
            console.log(payload);
            console.log(state.a);
            return {...state,...payload}
        }
    },
    
//put 用于触发action ，call用于调用异步处理逻辑，select用于从state获取数据
    effects:{
        *getuser(payload,{call,put,select,take}){
            const token = yield select(state=>state.home.token)
            const data = yield call(api.userList,{per:10})//用户列表
            yield put({
                type:'change',
                payload:{
                    list1:{num:data.data.totalCount},
                }
            }
            )
            console.log(data.data);
        },
        *edit(payload,{put,call}){
            let params = {name:123,descriptions:123,quantify:123,price:123,coverImg:123,productCategory:1}
            //添加商品
           let data =  yield call(api.addPro,params)
           console.log(data);
            yield put({
                type:'push',
                payload:{
                    a:[{type:1,name:'lllll'}]
                }
            })
        }
    }
}