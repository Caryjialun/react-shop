import React from 'react';
import {Menu} from 'antd';
import {storage} from '../../utils/util'
import SubMenu from 'antd/lib/menu/SubMenu';
import {NavLink} from 'react-router-dom';

class Menustest extends React.Component {
   
    constructor(props){
        super(props)
        this.state={}
    }

    componentDidMount(){
        console.log('menu', storage('menu') );
        // 改装数据
        let changeData = JSON.parse(storage('menu'));
        changeData.forEach(item=>{
            this.dataChange(item);
        })

        // 渲染页面
        const renderData = this.dataRender(changeData);
        
        // 把渲染好的标签数据设置到state状态中
        this.setState({
            renderData
        })

    }

    dataRender=(data)=>{
        return data.map(item=>{
            if(item.children){
                return <SubMenu title = {item.title} key = {item.key}>
                    {this.dataRender(item.children)}
                </SubMenu>
            }
            return <Menu.Item title={item.title} key = {item.key}>
                <NavLink to={item.key}>{item.title}</NavLink>
            </Menu.Item>
        })
    }

    dataChange=(item)=>{
        item.key = item.path;
        switch(item.key){
            case '/financeManage' :
                item.title = '返款';
                break;
            case '/applyManage':
                item.title= "s";
                break;
            case '/loanManage':
                item.title ='c';
                break;
            case '/refundManage':
                item.title="sc";
                break;
            default:
                item.title='';
        }
        delete item.path;
    }

    render() {
        return (
            <Menu theme="dark">
                {this.state.renderData}
            </Menu>
        );
    }
}

export default Menustest;