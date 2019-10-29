import React from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import Login from '../pages/login/Login'
import Index from '../pages/index/Index'
import Error from '../pages/error/Error'
import Home from '../pages/home/Home'
import ApplyManage from '../pages/applyManage/ApplyManage'
import FinanceManage from '../pages/financeManage/FinanceManage'
import LoanManage from '../pages/loanManage/LoanManage'
import RefundManage from '../pages/refundManage/RefundManage'

class routerTest extends React.Component {

    constructor(props){
        super(props);
        this.state={}
    }

    render() {
        return (
            <Router>
                <Switch>
                    {/* 如果用switch倒序匹配可以加载自己想要的路由（不好看） */}
                    {/* <Route path="/login" render={(props)=><Login {...props}/>}/> 
                    <Route path="/" render={(props)=><Index {...props}/>}/> */}
                    
                    <Route path="/login" render={(props)=><Login {...props}/>}/> 
                    {/* 正确用法 */}
                    <Route path="/" render={(props)=>
                        <Index {...props}>
                            <Switch>
                                <Route path='/home' component={Home}/>
                                <Route path="/applyManage" component= {ApplyManage}/>
                                <Route path="/financeManage" component= {FinanceManage}/>
                                <Route path="/loanManage" component= {LoanManage}/>
                                <Route path="/refundManage" component= {RefundManage}/>
                                <Route component={Error}/>
                            </Switch>
                        </Index>
                    }/>

                    {/* <Route path="/applyManage" render={(props)=><ApplyManage {...props}/>}/> */}
                    {/* {/* <Route exact path="/home" render={(props)=><Home {...props}/>}/> */}

                    <Route component={Error}/>
                </Switch>
            </Router>
        );
    }
}

export default routerTest;