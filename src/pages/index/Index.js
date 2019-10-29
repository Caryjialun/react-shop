import React from 'react';
// import {withRouter} from 'react-router-dom';
// import {storage} from '../../utils/util'
import { Layout, Breadcrumb } from 'antd';
import './index.less'

import Menus from '../../components/layout/Menusssss'
import Header from '../../components/layout/Head'
import Footer from '../../components/layout/Footers'

const {  Content, Sider } = Layout;

class Index extends React.Component {

    constructor(props){
        super(props);
        this.state={
            collapsed:false
        }
    }

    componentDidMount() {
        // console.log('a', this.props);
        // if(storage('token')==null){
        //     this.props.history.push('/login');
        // }
        console.log('props',this.props.children);
    }

    onCollapse = collapsed =>{
        this.setState({
            collapsed
        })
    }

    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                    <div className="logo" />
                    <Menus/>
                </Sider>

            <Layout>

                <Header/> 

                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>User</Breadcrumb.Item>
                    <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                        {this.props.children}
                    </div>
                </Content>

                <Footer/>

            </Layout>
          </Layout>
        );
    }
}

export default Index;