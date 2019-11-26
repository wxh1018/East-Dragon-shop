import * as api from '../../until/api'
import {routerRedux} from 'dva/router'

export default {
    namespace:'editpro',
    state:{
        list:[],//分类
        target:{},
        id:''
    },
    reducers:{
        change(state,{payload}){
            return {...state,...payload}
        }
    },
    effects:{
        //修改商品
        *edit(payload,{put,call}){
            const data =yield call(api.ediPro,payload.payload)
            console.log(data);
            if(data.status == 200){
                alert('修改成功')
                yield put (routerRedux.push('/index/product'))
            }else{
                console.log('修改失败 请稍后再试');
            }
        },
        *gettarget(payload,{put,call}){
            const data = yield call(api.getTarget,payload.payload)
            yield put({
                type:'change',
                payload:{
                    id:payload.payload.id
                }
            })
            yield put({
                type:'change',
                payload:{
                    target:data.data
                } 
            })
        }
        
    },
    subscriptions:{
        setup({dispatch,history,}){
            return history.listen(({pathname})=>{
                let path = history.location.pathname
                if(pathname === path){
                    dispatch({
                        type:'product/sortList'
                    })
                }
            })
        }
    }
}