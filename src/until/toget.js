import * as API from './base'



// 用户管理



//  管理后台默认登录账号密码为admin,此处管理员信息的管理功能暂未实现
// params
//   userName: admin
//   password: admin
export const managerLoginApi=(params)=>{
    return API.POST('/api/v1/auth/manager_login',params)
}



// 获取管理员信息
// headers
//   authorization Bearer token  // 需要提供jwt信息

export const managerInfoApi=(params)=>{
    return API.GET('/api/v1/users/manager_info',params)
}


// 获取用户列表
// params
//   per       每一页显示的数量,默认10
//   page      当前页码,默认1
//   userName  用户名
//   nickName  昵称
// headers
//   authorization Bearer token  // 需要提供jwt信息
export const getUsersListApi=(params)=>{
    return API.GET('/api/v1/admin/users',params)
}



// 新增用户
// params
//   userName  用户名
//   password  密码
//   nickName  昵称
//   avatar    头像
// headers
//   authorization Bearer token  // 需要提供jwt信息
export const addUsersApi=(params)=>{
    return API.POST('/api/v1/admin/users',params)
}



// 修改用户
// params
//   userName  用户名
//   nickName  昵称
//   avatar    头像
// headers
//   authorization Bearer token  // 需要提供jwt信息
export const updateUsersApi=(params)=>{
    return API.PUT('/api/v1/admin/users/5c6e953a224d199e15f12b9d',params)
}



// 删除用户信息
// headers
//   authorization Bearer token  // 需要提供jwt信息
export const delUsersApi=(params)=>{
    return API.DELETE('/api/v1/admin/users/5c6e953a224d199e15f12b9d',params)
}



// 获取指定用户的信息
// headers
//   authorization Bearer token  // 需要提供jwt信息
export const getDetailUsersApi=(params)=>{
    return API.GET('/api/v1/admin/users/5c6e953a224d199e15f12b9d',params)
}


// 修改用户密码
// params
//   password  密码
// headers
//   authorization Bearer token  // 需要提供jwt信息
export const updateMimaUsersApi=(params)=>{
    return API.PUT('/api/v1/admin/users/reset_pwd/:id',params)
}



// 获取用户收货地址
// params
//   per   每一页显示的数量,默认10
//   page  当前页码,默认1
// headers
//   authorization Bearer token  // 需要提供jwt信息
export const getAddressApi=(params)=>{
    return API.GET('/api/v1/admin/addresses/:user_id',params)
}






// 商品管理





// 获取商品列表
// params
//   per   每一页显示的数量,默认10
//   page  当前页码,默认1
//   name  商品名字
// headers
//   authorization Bearer token  // 需要提供jwt信息
export const getProductsApi=(params)=>{
    return API.GET('/api/v1/admin/products',params)
}





// 新增商品信息
// params
//   name          商品名字
//   descriptions  商品简介
//   quantity      数量(库存)
//   price         价格
//   coverImg      主图
//   productCategory 商品分类id
// headers
//   authorization Bearer token  // 需要提供jwt信息
export const addProductsApi=(params)=>{
    return API.POST('/api/v1/admin/products',params)
}



// 修改商品信息
// params
//   name          商品名字
//   descriptions  商品简介
//   quantity      数量(库存)
//   price         价格
//   coverImg      主图
//   productCategory 商品分类id
// headers
//   authorization Bearer token  // 需要提供jwt信息
export const uapdateProductsApi=(params)=>{
    return API.PUT('/api/v1/admin/products/:id',params)
}




// 删除商品信息
// headers
//   authorization Bearer token  // 需要提供jwt信息
export const deleteProductsApi=(params)=>{
    return API.DELETE('/api/v1/admin/products/:id',params)
}




// 根据ID获取商品信息
// headers
//   authorization Bearer token  // 需要提供jwt信息
export const getProductsDetailApi=(params)=>{
    return API.GET('/api/v1/admin/products/:id',params)
}






// 商品分类管理





// 获取商品分类列表
// params
//   per   每一页显示的数量,默认10
//   page  当前页码,默认1
//   name  商品名字
// headers
//   authorization Bearer token  // 需要提供jwt信息
export const getProductsCategoriesApi=(params)=>{
    return API.GET('/api/v1/admin/product_categories',params)
}





// 新增商品分类信息
// params
//   name          商品名字
//   descriptions  商品简介
//   coverImg      主图
// headers
//   authorization Bearer token  // 需要提供jwt信息
export const addProductsCategoriesApi=(params)=>{
    return API.POST('/api/v1/admin/product_categories',params)
}




// 修改商品信息
// params
//   name          商品名字
//   descriptions  商品简介
//   coverImg      主图
// headers
//   authorization Bearer token  // 需要提供jwt信息
export const updateProductsCategoriesApi=(params)=>{
    return API.PUT('/api/v1/admin/product_categories/:id',params)
}





// 删除商品分类信息
// headers
//   authorization Bearer token  // 需要提供jwt信息
export const delProductsCategoriesApi=(params)=>{
    return API.DELETE('/api/v1/admin/product_categories/:id',params)
}





// 根据ID获取商品分类信息
// headers
//   authorization Bearer token  // 需要提供jwt信息
export const getSomeProductsCategoriesApi=(params)=>{
    return API.GET('/api/v1/admin/product_categories/:id',params)
}





///订单管理




// 获取订单列表
// params
//   per   每一页显示的数量,默认10
//   page  当前页码,默认1
//   no  订单号
//   user 用户id
// headers
//   authorization Bearer token  // 需要提供jwt信息
export const getOrdersApi=(params)=>{
    return API.GET('/api/v1/admin/orders',params)
}





// 修改商品信息
// params
//   isPayed          是否支付(true/false)
// headers
//   authorization Bearer token  // 需要提供jwt信息
export const updateOrdersApi=(params)=>{
    return API.PUT('/api/v1/admin/orders/:id',params)
}





// 删除商品分类信息
// headers
//   authorization Bearer token  // 需要提供jwt信息
export const delOrdersApi=(params)=>{
    return API.DELETE('/api/v1/admin/orders/:id',params)
}





// 根据ID获取商品分类信息
// headers
//   authorization Bearer token  // 需要提供jwt信息
export const getSomeOrdersApi=(params)=>{
    return API.GET('/api/v1/admin/orders/:id',params)
}

