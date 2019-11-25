import * as api from '../../until/api'

export default {
    namespace: 'product',
    state: {
        list: []//商品列表
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
        },
        //删除商品
        *delpro(payload,{put,call}){
           let result =  yield call(api.delPro,payload.payload.id)
            console.log(result);
        }
    }
}
// $ git --help                                      # 帮助命令
// $ git pull origin master                    # 将远程仓库里面的项目拉下来
// $ dir                                                # 查看有哪些文件夹
// $ git rm -r --cached target              # 删除target文件夹
// $ git commit -m '删除了target'        # 提交,添加操作说明
// $ git push -u origin master               # 将本次更改更新到github项目上去