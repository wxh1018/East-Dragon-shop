
import { connect } from 'dva'
import Link from 'umi/link'
import style from './index.css'

function Login(props) {
    let value = ''
    let password = ''
    return (
        <div className={style.box}>
            <div className={style.form}>
                <label htmlFor="name" >
                    <span>账号</span>
                    <input type="text" id='name' ref={(val) => value = val} /></label><br/>
                <label htmlFor="">
                    <span>密码</span>
                    <input type='password' id='pwd' ref={(pwd) => password = pwd} />
                </label><br/>
                <button onClick={() => props.dispatch({
                    type: 'login/tologin',
                    payload: {
                        userName: value.value,
                        password: password.value
                    }
                })}><Link style={{pointerEvents:'none'}} to="/index/home">登录</Link></button>
            </div>
        </div>
    );
}
export default connect(state => state.login)(Login)
