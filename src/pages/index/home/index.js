
import Link from 'umi/link';
import { connect } from 'dva';
import { BrowserRouter as Router, Route, Switch, useState } from 'react-router-dom';
import {useEffect} from 'react'
import style from './index.css'
import { Icon } from 'antd';
import { Item } from 'rc-menu';

function Index(props) {
  useEffect(() => {
     props.dispatch({
      type: 'home/getuser',
    }),
    props
  },[])
  return (
    <div className={style.normal}>
      <ul className={style.head}>
        <li>
          <div>
            <Icon type="smile" theme="outlined" style={{ fontSize: 50 }} />
          </div>
          <div>
            <span>{props.list1.num} </span>
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
      {
        props.a.map((item) => {
          return (
            <div key={item.type}>
              <p>{item.name}</p>
            </div>
          )
        })
      }
      <button onClick={() => props.dispatch({
        type: 'home/edit'
      })}>更新</button>
      {
        props.grid1.map((item) => {
          return (
            <ul key={item.type} className={style.productMessage}>
              <li>{item.title}</li>
              <li>{item.first}</li>
              <li></li>
              <li>{item.second}</li>
              <li></li>
              <li>{item.third}</li>
              <li></li>
            </ul>
          )
        })
      }
      {/* <ul className={style.head}>
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
      </ul> */}
    </div>

  );
}

export default connect(state => state.home)(Index)