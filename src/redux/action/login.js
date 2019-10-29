export const type={
    VIEW_MODAL: 'VIEW_MODAL', // modal 弹框
    LOGIN_USER: 'LOGIN_USER' // 登陆信息
}

export function viewModal(visible,telList,checkedTel){
    return {
        type: type.VIEW_MODAL,
        telInfo:{
            visible,
            telList,
            checkedTel
        }
    }
}

export function loginUser(username,pwd,validateNum){
    return {
        type: type.LOGIN_USER,
        userInfo:{
            username,
            pwd,
            validateNum
        }
    }
}