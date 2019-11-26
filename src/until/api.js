import * as API from './index'

export const adminLogin=(params)=>{
    return API.POST('/api/v1/auth/manager_login',params)
}

export const adminInfo=(params)=>{
    return API.HEADGET('/api/v1/users/manager_info')
}



//用户管理
export const userList=(params)=>{
    return API.HEADGET('/api/v1/admin/users',params)
}

export const addUser=(params)=>{
    return API.HEADPOST('/api/v1/admin/users',params)
}

export const updateUser=(params)=>{
    return API.PUT('/api/v1/admin/users/')
}

export const delUser=(params)=>{
    return API.DELETE('/api/v1/admin/users/:id')
}

export const idUser=(params)=>{
    return API.HEADGET('/api/v1/admin/users/:id')
}

export const userPwd=(params)=>{
    return API.HEADPOST('/api/v1/admin/users/reset_pwd/:id')
}

export const userAddress=(params)=>{
    return API.HEADGET('/api/v1/admin/addresses/:user_id')
}




//商品管理
export const proList=(params)=>{
    return API.HEADGET('/api/v1/admin/products',params)
}

export const addPro=(params)=>{
    return API.HEADPOST('/api/v1/admin/products',params)
}

export const updatePro=(params)=>{
    return API.HEADPOST('/api/v1/admin/products/:id')
}
//根据id获取商品信息
export const getTarget = (params)=>{
    return API.HEADGET(`/api/v1/admin/products/${params.id}`)
}

export const delPro=(params)=>{
    return API.DELETE('/api/v1/admin/products/',params)
}

export const ediPro=(params)=>{
    return API.PUT('/api/v1/admin/products/',params)
}




//商品分类
export const sortList=(params)=>{
    return API.HEADGET('/api/v1/admin/product_categories')
}

export const addSort=(params)=>{
    return API.HEADPOST('/api/v1/admin/product_categories',params)
}

//返回商品分类信息
export const updatePro2=(params)=>{
    return API.HEADPOST('/api/v1/admin/product_categories/:id')
}

export const delSort=(params)=>{
    return API.HEADPOST('/api/v1/admin/product_categories/:id')
}

export const idSort=(params)=>{
    return API.HEADGET('/api/v1/admin/product_categories/:id')
}





//订单
export const orderList=(params)=>{
    return API.HEADGET('/api/v1/admin/orders')
}

//修改是否支付
export const updatePro3=(params)=>{
    return API.PUT('/api/v1/admin/orders/:id')
}

//删除订单里的商品分类信息
export const delSort2=(params)=>{
    return API.DELETE('/api/v1/admin/orders/:id')
}

export const idSort2=(params)=>{
    return API.HEADGET('/api/v1/admin/orders/:id')
}