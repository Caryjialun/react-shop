import React from 'react';
import { Menu } from 'antd';
import {storage} from '../../utils/util'
import {NavLink} from 'react-router-dom'
import './layout.less'

const { SubMenu } = Menu;

class Menus extends React.Component {
    constructor(props){
        super(props);
        this.state={}
    }

    componentDidMount(){
      // 改装数据
      
      let menuData = JSON.parse(storage('menu'));
      
      menuData.forEach(item => {
        this.changeData(item);
      });

      let renderMenu = this.renderView(menuData);
      // console.log('bbb', menuData);
      
      this.setState({
        renderMenu
      })

    }
    

    renderView=(data)=>{
      return data.map(item=>{
        if(item.children){
          return (
            <SubMenu key= {item.key} title={item.title}>
              {this.renderView(item.children)}
            </SubMenu>
          )
        }

        return (
          <Menu.Item key = {item.key} title={item.title}>
            <NavLink to={item.key} activeClassName="checked"  >{item.title}</NavLink>
          </Menu.Item>
        )
        
      })
    }

    changeData=(item)=>{
      item.key = item.path;
      switch(item.key){
        case item.key='/financeManage' :
          item.title = '返款';
          break;
        case item.key='/applyManage' :
          item.title = '申请';
          break;
        case item.key='/loanManage' :
            item.title = '审批';
            break;
        case item.key='/refundManage' :
            item.title = '返款';
            break;
        default :
          item.title = '';
      }
      delete item.path;
    }

    render() {
        return (
          <Menu theme="dark">
            {this.state.renderMenu}
          </Menu>
          //   <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          //   <Menu.Item key="1">
          //     <Icon type="pie-chart" />
          //     <span>Option 1</span>
          //   </Menu.Item>
          //   <Menu.Item key="2">
          //     <Icon type="desktop" />
          //     <span>Option 2</span>
          //   </Menu.Item>
          //   <SubMenu
          //     key="sub1"
          //     title={
          //       <span>
          //         <Icon type="user" />
          //         <span>User</span>
          //       </span>
          //     }
          //   >
          //     <Menu.Item key="3">Tom</Menu.Item>
          //     <Menu.Item key="4">Bill</Menu.Item>
          //     <Menu.Item key="5">Alex</Menu.Item>
          //   </SubMenu>
          //   <SubMenu
          //     key="sub2"
          //     title={
          //       <span>
          //         <Icon type="team" />
          //         <span>Team</span>
          //       </span>
          //     }
          //   >
          //     <Menu.Item key="6">Team 1</Menu.Item>
          //     <Menu.Item key="8">Team 2</Menu.Item>
          //   </SubMenu>
          //   <Menu.Item key="9">
          //     <Icon type="file" />
          //     <span>File</span>
          //   </Menu.Item>
          // </Menu>

        );
    }
}

export default Menus;