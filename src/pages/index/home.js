
import Link from 'umi/link';
// import Login from './login/_layout'
import { connect } from 'dva';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import style from './home.css'
import { Icon } from 'antd';
import { Item } from 'rc-menu';

function home(props) {
  return (
    <div className={style.normal}>
      <ul className={style.head}>
        <li>
          <div>
            <Icon type="smile" theme="outlined" style={{ fontSize: 50 }} />
          </div>
          <div>
            <span>123 </span>
            <span>店铺会员</span>
          </div>
        </li>
        <li>
          <div>
            <Icon type="tags" theme="outlined" style={{ fontSize: 50 }} twoToneColor='white' />
          </div>
          <div>
            <span>666￥</span>
            <span>总金额</span>
          </div>
        </li>
        <li>
          <div>
            <Icon type="copy" theme="outlined" style={{ fontSize: 50 }} />
          </div>
          <div>
            <span>123 </span>
            <span>总订单</span>
          </div>
        </li>
        <li>
          <div>
            <Icon type="profile" theme="outlined" style={{ fontSize: 50 }} />
          </div>
          <div>
            <span>123 </span>
            <span>交易记录</span>
          </div>
        </li>
      </ul>
      <p>{props.name}</p>
      <ul className={style.head}>
        {
          props.list.map((item) => {
            return (
                <li key={item.type}>
                  <div>
                    <Icon type="profile" theme="outlined" style={{ fontSize: 50 }} />
                  </div>
                  <div>
                    <span>{item.num} </span>
                    <span>{item.content}</span>
                  </div>
                </li>
            )
          })
        }
      </ul>
    </div>

  );
}

export default connect(state => state.home)(home)