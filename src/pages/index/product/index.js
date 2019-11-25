import { connect } from 'dva'
import { useEffect, useState } from 'react'
import { Table, Divider, Pagination } from 'antd';
import { BrowserRouter as Router, Route, Switch, ReactDOM } from 'react-router-dom';

var sty = { width: "50px", }
const pro = (props) => {
    useEffect(() => {
        getPro()
    }, [])

    //获取商品
    function getPro() {
        console.log(1);
        props.dispatch({
            type: 'product/getpro'
        })
    }

    let name, descriptions, quantity, price, coverImg = ''
    const [data, setobj] = useState([])

    function addpro() {//点击添加
        // let params = {key:data.length+1, name: name.value, descriptions: descriptions.value, price: price.value, quantity: quantity.value,coverImg:coverImg.value}
        let params = { key: data.length, name: '雪', descriptions: '零星飘落', price: 999, quantity: 66, coverImg: 'http://up.enterdesk.com/edpic/41/88/16/418816c05957155da73031963316a53c.jpg' }

        props.dispatch({
            type: 'product/addpro',
            payload: params
        })
        getPro()
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
            title: '_id',
            dataIndex: '_id',
            key: '_id',
            render: _id => <a>{_id}</a>,
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
            key: 'tags',
            dataIndex: 'descriptions',
        },
        {
            title: 'Action',
            key: 'action',
            render: (obj, record) => (
                <span>
                    <a onClick={()=>edit(obj)}>修改</a>
                    <Divider type="vertical" />
                    <a onClick={()=>del(obj)}>删除</a>
                </span>
            ),
        },
    ];
    //修改
function edit(obj){
    console.log(obj._id);
}
//删除
function del(obj){
    props.dispatch({
        type:'product/delpro',
        payload:{
            id:obj._id
        }
    })
    getPro()
}


    return (
        <div>
            <Table columns={columns} dataSource={data} />
            name:<input type="text" ref={(val) => name = val} />
            简介:<input type="text" ref={(val) => descriptions = val} />
            数量:<input type="text" ref={(val) => quantity = val} />
            价格:<input type="text" ref={(val) => price = val} />
            图片:<input type="text" ref={(val) => coverImg = val} />
            <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />
            {/* <br />
            <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} disabled /> */}
            <button onClick={addpro}>添加</button>
        </div>
    )
}

export default connect(state => state.product)(pro)