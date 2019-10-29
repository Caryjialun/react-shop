import React from 'react';
import {Modal,Button,Select, message} from 'antd';
import axios from 'axios';
import { connect } from 'react-redux';
import { viewModal } from '../../redux/action/login';
import API from '../../services/api';
// import {withRouter} from 'react-router-dom';

const {Option} = Select;

class TelModal extends React.Component {
    constructor(props){
        super(props);
        this.state={ }
    }

    componentDidMount(){

    }
    
    handleCancel=()=>{
        const {telInfo} = this.props.state.loginReduce;
        this.props.dispatch(viewModal(false,telInfo.telList,telInfo.checkedTel));
    }

    handleChange=(value)=>{
        const {telInfo} = this.props.state.loginReduce;
        this.props.dispatch(viewModal(telInfo.visible,telInfo.telList,value));
    }

    submitSend=()=>{
    
        const {telInfo} = this.props.state.loginReduce;
        const {dispatch} = this.props;
        if(!telInfo.checkedTel){
            message.error('请设置对应的商户手机号码');
            return;
        }
     
        const params = {
            shopId: telInfo.telList[0].shopId,
            mobile: telInfo.checkedTel
        }
        
        axios.post(API.telSendCode,params).then(res=>{
            const {data} = res;
            if(!data.success){
                message.error(data.errorMsg);
                return;
            }
            message.success(data.data);
            dispatch(viewModal(false,telInfo.telList,telInfo.checkedTel));
        })
    }

    render() {
        const {telInfo} = this.props.state.loginReduce;
        return (
            <Modal title="验证号码"
                visible={telInfo.visible}
                onCancel={this.handleCancel}
                footer={[
                    <Button key="submit" 
                    type="primary" 
                    onClick={this.submitSend}>
                        确定发送
                    </Button>
                    ]}>

                请选择获取验证码的手机号:
                <Select value={telInfo.checkedTel} 
                    style={{ width: 180 }} 
                    onChange={this.handleChange} 
                    placeholder="请选择电话号码" allowClear>
                    {
                        (telInfo.telList || []).map((item,index)=>{
                            return <Option key={index} 
                                    value={item.mobile}>{item.mobile}</Option>
                        })
                    }
                </Select>
            </Modal>
        );
    }
}

function mapState(state){
    return {
        state: state
    }
}

export default connect(mapState)(TelModal);