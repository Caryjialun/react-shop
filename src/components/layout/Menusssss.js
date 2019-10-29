import React from 'react';
import {Menu} from 'antd';
import {storage} from '../../utils/util'
import {NavLink} from 'react-router-dom'

const {SubMenu} = Menu;
class Menusssss extends React.Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount(){
        //改装数据
        let changeData = JSON.parse(storage('menu'));
        
        changeData.forEach(item=>{
           this.dataChange(item);
        })

        // 渲染数据
        const renderData = this.dataRender(changeData);

        // 最后设置到state状态中
        this.setState({
            renderData
        })

        console.log('a',changeData);

    }

    dataRender=(data)=>{
        return data.map(item=>{
            // 存在子节点的情况
            if(item.children){
                return <SubMenu title = {item.title} key = {item.key}>
                    {this.dataRender(item.children)}
                </SubMenu>
            }
            return <Menu.Item title = {item.title} key ={item.key} >
                <NavLink to={item.key}>{item.title}</NavLink>
            </Menu.Item>
        })
    }

    dataChange=(item)=>{
        item.key = item.path;
        switch(item.key){
            case '/financeManage':
                item.title= 'fan1';
                break;
            case '/applyManage':
                item.title= 'fan2';
                break;
            case "/loanManage":
                item.title= 'fan3';
                break;
            case "/refundManage":
                item.title= 'fan4';
                break;
            default:
                item.title='';
        }
        delete item.path;
    }

    render() {
        return (
            <Menu theme ='dark'>
                {this.state.renderData}
            </Menu>
        );
    }
}

export default Menusssss;