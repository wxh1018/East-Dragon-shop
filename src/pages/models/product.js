import * as api from '../../until/api'

export default {
    namespace: 'product',
    state: {
        list: [],//商品列表,
        sortList:[]//分类
    },
    reducers: {
        change(state, { payload }) {
            return { ...state, ...payload }
        }
        
    },
    effects: {
        //获取商品
        *getpro(payload, { call, put }) {
            const result1 = yield call(api.proList)
            let params = { per: result1.data.totalCount }
            const result = yield call(api.proList, params)
            let arr = result.data.products
            console.log(result);
            arr.forEach((v, i) => {
                v.key = i + 1
            });
            yield put({
                type: 'change',
                payload: {
                    list: arr
                }
            })
        },
        //添加商品
        *addpro(payload, { put, call, select, take }) {
            let data = yield call(api.addPro, payload.payload)
            console.log(data);
        },
        //删除商品
        *delpro(payload,{put,call}){
           let result =  yield call(api.delPro,payload.payload.id)
            console.log(result);
        },
        //请求类别
        *sortList(payload,{put,call}){
            let data = yield call(api.sortList)
            data.data.categories.unshift({_id:1,name:'请选择分类'})
            yield put({
                type:'change',
                payload:{
                    sortList: data.data.categories
                }
            })
            console.log('请求类别');
            yield put({
                type:'editpro/change',
                payload:{
                    list: data.data.categories
                }
            })
            
        },

        //新建分类

        *newfenlei(payload,{call,put}){
            console.log(payload.payload);
            const data = yield call(api.addSort,payload.payload)
            console.log(data);

        }
    }
}