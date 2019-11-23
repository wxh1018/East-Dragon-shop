import * as api from '../../until/api'

export default{
    namespace:'getproduct',
    state:{
        list:''//商品列表
    },
    reducers:{
        change(state,{payload}){
            return {...state,...payload}
        }
    },
    effects:{
        *getpro(payload,{call,put}){
            const result = yield call(api.proList)
            console.log(result.data.products);
            yield put({
                type:'change',
                payload:{
                    list:result.data.products
                }
            })
        }
    }
}
// $ git --help                                      # 帮助命令 
// $ git pull origin master                    # 将远程仓库里面的项目拉下来
// $ dir                                                # 查看有哪些文件夹
// $ git rm -r --cached target              # 删除target文件夹
// $ git commit -m '删除了target'        # 提交,添加操作说明
// $ git push -u origin master               # 将本次更改更新到github项目上去