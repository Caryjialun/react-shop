import React from 'react';
import {Layout} from 'antd'

const {Footer} = Layout;

class Footers extends React.Component {
    constructor(props){
        super(props);
        this.state={}
    }
    render() {
        return (
            <Footer style={{ textAlign: 'center' }}>美好有趣 ©2019 Created by ljl</Footer>
        );
    }
}

export default Footers;