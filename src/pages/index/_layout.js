
import styles from './index.css';
import Link from 'umi/link';
import { connect } from 'dva';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Layout, Menu, Icon, Breadcrumb } from 'antd';
import Login from '../login'


function index(props) {
  (function (param) { 
    //会员数量
    props.dispatch({
      type:'home/getuser',
    });
 })()
  const { Header, Content, SubMenu, Footer, Sider } = Layout;
  // props.route.path == '/'?location.href = '/index/home':1

  return (
    <div className={styles.normal}>
      <header style={{ height: 66, position: "fixed", top: 0, width: "100%", zIndex: 9, background: 'white', borderBottom: '1px solid #cccccc' }}>
        <img style={{ height: 56, paddingLeft: 30 }} src={require('../../assets/logo.png')} alt="" />
        <span className={styles.h1}>东龙商城管理系统</span>
      </header>

      <main style={{ position: "absolute", top: 66, width: "100%" }}>
        <Layout>
          <Sider
            style={{
              overflow: 'auto',
              height: '100vh',
              position: 'fixed',
              left: 0,
            }}
          >
            <Menu theme="" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">
                <Link to="/index/home"
                 onClick={()=>props.dispatch({
                  type:'home/getuser',
                })}
                >
                  <Icon type="user" />
                  <span className="nav-text">系统首页</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="2"><Link to="/index/transaction">
                <Icon type="video-camera" />
                <span className="nav-text">交易管理</span></Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="upload" />
                <span className="nav-text"
                onClick={()=>props.dispatch({
                  type:'getproduct/getpro'
                })}
                >商品管理</span>
              </Menu.Item>
              <Menu.Item key="4">
                <Icon type="bar-chart" />
                <span className="nav-text">nav 4</span>
              </Menu.Item>
              <Menu.Item key="5">
                <Icon type="cloud-o" />
                <span className="nav-text">nav 5</span>
              </Menu.Item>
              <Menu.Item key="6">
                <Icon type="appstore-o" />
                <span className="nav-text">nav 6</span>
              </Menu.Item>
              <Menu.Item key="7">
                <Icon type="team" />
                <span className="nav-text">nav 7</span>
              </Menu.Item>
              <Menu.Item key="8">
                <Icon type="shop" />
                <span className="nav-text">nav 8</span>
              </Menu.Item>
              <Menu.Item key="9">
                <Icon type="shop" />
                <span className="nav-text">nav 8</span>
              </Menu.Item>
              <Menu.Item key="10">
                <Icon type="shop" />
                <span className="nav-text">nav 8</span>
              </Menu.Item>
              <Menu.Item key="11">
                <Icon type="shop" />
                <span className="nav-text">nav 8</span>
              </Menu.Item>
              <Menu.Item key="12">
                {/* <Icon type="shop" /> */}
                <span className="nav-text"></span>
              </Menu.Item>
              <Menu.Item key="13">
                {/* <Icon type="shop" /> */}
                <span className="nav-text"></span>
              </Menu.Item>
              <Menu.Item key="14">
                {/* <Icon type="shop" /> */}
                <span className="nav-text"></span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout style={{ marginLeft: 200 }}>
            <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
              <div style={{ padding: 24, background: '#fff', textAlign: 'center', minHeight: 520 }}>
                <Router>
                  <Route path='/' exact render={() => (
                    <Redirect to='/index/home' />
                  )} />
                </Router>
                {props.children}
                <div>
                </div>
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}></Footer>
          </Layout>
        </Layout>,


      </main>
    </div>

  );
}

export default connect(state => state.login)(index)