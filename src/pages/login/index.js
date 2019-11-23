
import { connect } from 'dva'
import Link from 'umi/link'
import style from './login.css'

function Login(props) {
    let value = ''
    let password = ''
    return (
        <div className={style.box}>
            <div className={style.form}>
                {/* <label htmlFor="name" >
                    <span>账号</span>
                    <input type="text" id='name' ref={(val) => value = val} /></label><br/>
                <label htmlFor="">
                    <span>密码</span>
                    <input type='password' id='pwd' ref={(pwd) => password = pwd} />
                </label><br/> */}
                 <label htmlFor="name" >
                    <span>账号</span>
                    <input type="text" id='name' defaultValue='admin'/></label><br/>
                <label htmlFor="">
                    <span>密码</span>
                    <input type='password' id='pwd'defaultValue='admin' />
                </label><br/>
                <Link className={style.login} to="/index/home" onClick={() => props.dispatch({
                    type: 'login/tologin',
                    payload: {
                        userName: 'admin',
                        password: 'admin'
                    }
                })}>登录</Link>
            </div>
        </div>
    );
}
export default connect(state => state.login)(Login)
