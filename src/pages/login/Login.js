import React from 'react';
import TelModal from './TelModal';
import './login.less';
import {Input,Button,Icon, message} from 'antd';
import { storage } from '../../utils/util';
import axios from 'axios';
import API from '../../services/api'
import {connect} from 'react-redux';
import {loginUser, viewModal} from '../../redux/action/login'


class Login extends React.Component {

    constructor(props){
        super(props);
        this.state={ }
    }

    componentDidMount() { 
        localStorage.removeItem('token');
    }

    // input change 事件统一处理
    handleInputChange(value,type){
        const {dispatch} = this.props;
        const {userInfo} = this.props.state.loginReduce;

        switch(type){
            case 'username':
                dispatch(loginUser(value,userInfo.pwd,userInfo.validateNum));
                break;
            case 'pwd':
                dispatch(loginUser(userInfo.username,value,userInfo.validateNum));
                break;
            case 'validateNum':
                dispatch(loginUser(userInfo.username,userInfo.pwd,value));
                break;
            default:
                break;
        }
    }

    getCode=()=>{
        const {userInfo,telInfo} = this.props.state.loginReduce;
        const {dispatch} = this.props;
        if(!userInfo.username || !userInfo.pwd){
            message.error('请输入用户名及密码')
            return;
        }

        const params = {
            userName: userInfo.username,
            pwd: userInfo.pwd, 
        }
      
        axios.post(API.telLoginList,params).then(res=>{
            const {data} = res;
            if(!data.success){
                message.error(data.errorMsg);
                return;
            }
            dispatch(viewModal(true, data.data.mobileList,telInfo.checkedTel));
        })
    }

    login=()=>{
        const {userInfo,telInfo} = this.props.state.loginReduce;
        if(!userInfo.validateNum){
            message.error('请输入验证码');
            return;
        }
     
        const params = {
            userName: userInfo.username,
            pwd: userInfo.pwd,
            mobile: telInfo.checkedTel,
            code: userInfo.validateNum
        }
        axios.post(API.login,params).then(res=>{
            const {data,success} = res.data;
            if(success){
                const menuData = JSON.stringify(data.menu);

                storage('shopId', data.shopId);
                storage('shopName', data.shopName);
                storage('token', data.token);
                storage('menu', menuData);
                setTimeout(()=>{
                    this.props.history.push('/')
                },1000);
            }
            
        })
    }

    reset=()=>{
        this.props.dispatch(loginUser(null,null,null));
    }

    render() {
        const {userInfo} = this.props.state.loginReduce;
        return (
            <div className="warp">
                <div className="login-content">

                    <div className="login-user">
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                            value={userInfo.username} 
                            onChange= {(e, type) => { this.handleInputChange(e.target.value,'username') }} 
                            placeholder="请输入用户名" />
                    </div>

                    <div className="login-pwd">
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" 
                            value={userInfo.pwd} 
                            onChange={(e, type) => { this.handleInputChange(e.target.value,'pwd') }} 
                            placeholder="请输入密码" />
                    </div> 

                    <div className="login-vad-input">
                        <Input style={{width:"300px",marginRight:'10px'}} 
                            value={userInfo.validateNum} 
                            onChange={(e, type) => { this.handleInputChange(e.target.value,'validateNum') }} 
                            addonBefore="验证码" placeholder="请输入验证码" />
                        <Button onClick={this.getCode}>获取验证码</Button>
                    </div>
                
                    <div className="login-btn">
                        <Button style={{marginRight:'10px'}} onClick={this.login}>登录</Button>
                        <Button onClick={this.reset}>重置</Button>
                    </div>
                </div>

                {/* 验证码信息 */}
                <TelModal/>
           </div>
        );
    }
}

function mapState(state){
    return {
        state: state
    }
}

export default connect(mapState)(Login);