import { connect } from 'dva'
import { useEffect, useState } from 'react'

function edit(props) {
    useEffect(() => {
        props.dispatch({
            type: 'editpro/gettarget',
            payload: {
                id: props.match.params.id
            }
        })
    }, [])
    var sel = { width: '50%', border: 'none', borderRadius: '5px', border: "1px solid skyblue", height: '50px', margin: "5px" }
    var p1 = { fontSize: '16px' }
    var btn = { width: "40%", borderRadius: '10px', height: "50px", outline: 'none', border: 0, cursor: 'pointer' }

    let name, descriptions, quantity, price, coverImg, productCategory, selval = ''
    function handlerOk() {//点击添加
        if (selval.value == 1) {
            alert('请选择分类')
            return;
        }
        let params = { name: name.value, descriptions: descriptions.value, price: price.value, quantity: quantity.value, coverImg: coverImg.value, productCategory: selval.value, id: props.match.params.id }
        props.dispatch({
            type: 'editpro/edit',
            payload: params
        })

    }

    // name.value = props.target.name
    useEffect(()=>{
        name.value = props.target.name
        descriptions.value = props.target.descriptions
        quantity.value = props.target.quantity
        price.value = props.target.price
        coverImg.value = props.target.coverImg
        console.log(props);
    })
    return (
        <div>
            {/* <p>{props.target.data.name}</p> */}
            <p style={p1}>name:</p><input style={sel} type="text" ref={(val) => name = val}   />
            <p style={p1}>简介:</p><input style={sel} type="text" ref={(val) => descriptions = val} />
            <p style={p1}>价格:</p><input style={sel} type="text" ref={(val) => quantity = val} />
            <p style={p1}>数量:</p><input style={sel} type="text" ref={(val) => price = val} />
            <p style={p1}>图片:</p><input style={sel} type="text" ref={(val) => coverImg = val} /><br></br>
            <p>已有分类:</p>
            <select ref={(val) => selval = val} name="" id="">
                {
                    props.list.map((item, i) => {
                        return (
                            <option key={i} value={item._id}>{item.name}</option>
                        )
                    })
                }
            </select>
            <button style={btn} onClick={() => handlerOk()}>上传修改</button>
        </div>
    )
}
export default connect(state => state.editpro)(edit)