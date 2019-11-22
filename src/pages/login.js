
// import styles from './login.css';
import { connect } from 'dva'
import Link from 'umi/link'

function Login(props) {
  let value = ''
  let password = ''
  return (
    <div>
      账号：<input type="text" ref={(val) => value = val} />
      密码：<input type='password' ref={(pwd) => password = pwd} />
      <p></p>
      <button onClick={() => props.dispatch({
        type: 'login/tologin',
        payload: {
          userName: value.value,
          password: password.value
        }
      })}>登录</button>
      <Link to="/index2">index2</Link>
      {props.children}
      <p>{props.userName}--{props.password}</p>
    </div>
  );
}
export default connect(state => state.login)(Login)
