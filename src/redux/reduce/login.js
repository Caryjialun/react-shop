import {type} from '../action/login'

// 设置初始值
const initState={
    telInfo:{
        visible: false,
        telList: [],
        checkedTel:'',
    },
    userInfo:{
        username:'',
        pwd:'',
        validateNum:'',
    }
}

export const loginReduce = (state=initState,action)=>{
    // console.log('a',action);
    switch(action.type){
        case type.VIEW_MODAL:{
            return {
                ...state,
                telInfo:{...action.telInfo}
            }
        }
        case type.LOGIN_USER:{
            return {
                ...state,
                userInfo:{...action.userInfo}
            }
        }
        default:
            return state;
    }
}