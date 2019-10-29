import React from 'react';
import {Layout} from 'antd'

const {Header} = Layout;

class Head extends React.Component {
    constructor(props){
        super(props);
        this.state={}
    }
    render() {
        return (
            <Header style={{ background: '#fff', padding: 0 }} />
        );
    }
}

export default Head;