import { connect } from 'dva'
import { useEffect, useState } from 'react'
import { Table, Divider, Pagination } from 'antd';
import Link from 'umi/link'
import { Modal, Button } from 'antd';

var sty = { width: "50px", }
var sel = { width: '80%', border: 'none', borderRadius: '5px', border: "1px solid skyblue", height: '40px' }
const pro = (props) => {
    useEffect(() => {
        getPro()
        getSort()
        document.querySelector("#root > div > div > main > section > aside > div > ul > li:nth-child(2)").click()
    }, [])

    //获取商品
    function getPro() {
        console.log(1);
        props.dispatch({
            type: 'product/getpro'
        })
    }

    let name, descriptions, quantity, price, coverImg, productCategory = ''
    const [data, setobj] = useState([])

    function addpro(obj) {//点击添加

        let params = { key: data.length + 1, name: name.value, descriptions: descriptions.value, price: price.value, quantity: quantity.value, coverImg: coverImg.value, productCategory: selval.value }
        console.log(params);
        props.dispatch({
            type: 'product/addpro',
            payload: params
        })
        getPro()
        name.value = descriptions.value = price.value = coverImg.value=selval.value = quantity.value = ''
        // setobj(() => {
        //     let list = [...data]
        //     list.unshift(params)
        //     return list
        // })
    }

    //数据变动时更新页面
    useEffect(() => {
        setobj(() => {
            let arr = [...data]
            arr = [...props.list]
            return arr
        })
    }, [props.list])

    //分页器
    function onChange(pageNumber) {
        console.log('Page: ', pageNumber);
    }

    const columns = [
        {
            title: '商品名',
            dataIndex: 'name',
            key: 'name',
            render: text => <a>{text}</a>,
        },
        {
            title: '类别',
            dataIndex: 'productCategory',
            key: '_id',
            render: id => {
                if (id) {
                    return (
                        <a>{id.name}</a>
                    )
                } else {
                    return (
                        <a>暂无分类</a>
                    )
                }
            }
        },
        {
            title: '图片',
            dataIndex: 'coverImg',
            key: 'coverImg',
            render: img => (
                <span>
                    <img src={img} style={sty} alt="" />
                </span>
            ),
        },
        {
            title: '价格',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: '库存',
            dataIndex: 'quantity',
            key: 'address',
        },
        {
            title: '简介',
            key: 'descriptions',
            dataIndex: 'descriptions',
            render: txt => <div style={{ width: '100px', textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}> {txt}</div >
        },
        {
            title: 'Action',
            key: 'action',
            render: (obj, record) => (
                <span>
                    <Link to={'/index/editproduct/' + obj._id}><span onClick={() => edit(obj)}>修改</span></Link>
                    <Divider type="vertical" />
                    <a onClick={() => del(obj)}>删除</a>
                </span>
            ),
        },
    ];
    //修改
    function edit(obj) {
        console.log();
        props.dispatch({
                    type: 'editpro/gettarget',
                    payload:{
                        id:obj._id
                    }
                })
        }
//删除
function del(obj) {
                props.dispatch({
                    type: 'product/delpro',
                    payload: {
                        id: obj._id
                    }
                })
                getPro()
            }

// 添加商品弹框
var selval = ''
        const getSort = () => {
            props.dispatch({
                type: 'product/sortList'
            })
        }
        const [visible, setvisible] = useState(() => false)
        const showModal = () => {
            console.log(1);
            // 请求类别
            getSort()
            setvisible(() => {
                return true
            })
        }

        //确定上传商品
        const handleOk = e => {
            if (selval.value == 1) {
                alert('请选择分类')
                return;
            }
            setvisible(() => {
                console.log(selval.value);
                addpro()
                return false
            })
        };

        const handleCancel = e => {
            console.log(e);
            setvisible(() => {
                return false
            })
        };

        //新建分类
        var newval = ''
        const toNew = () => {
            props.dispatch({
                type: 'product/newfenlei',
                payload: {
                    name: newval.value
                }
            })
            newval.value = ''
            getSort()
        }



        return (
            <div>
                <div>
                    <Button type="primary" onClick={() => showModal()}>
                        添加商品
        </Button>
                    <Modal
                        title="添加商品"
                        visible={visible}
                        onOk={() => handleOk()}
                        onCancel={(e) => handleCancel(e)}
                    >
                        <p>name:</p><input style={sel} type="text" ref={(val) => name = val} />
                        <p>简介:</p><input style={sel} type="text" ref={(val) => descriptions = val} />
                        <p>价格:</p><input style={sel} type="text" ref={(val) => quantity = val} />
                        <p>数量:</p><input style={sel} type="text" ref={(val) => price = val} />
                        <p>图片:</p><input style={sel} type="text" ref={(val) => coverImg = val} />
                        <p>已有分类:</p>
                        <select ref={(val) => selval = val} name="" id="">
                            {
                                props.sortList.map((item, i) => {
                                    return (
                                        <option key={i} value={item._id}>{item.name}</option>
                                    )
                                })
                            }
                        </select>
                        <input type="text" ref={(val) => newval = val} />
                        <button onClick={() => toNew()}>新建分类</button>

                    </Modal>
                </div>
                <Table columns={columns} dataSource={data} />

                {/* <br />
            <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} disabled /> */}

            </div>
        )
    }

    export default connect(state => state.product)(pro)