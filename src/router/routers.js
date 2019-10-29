import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from '../pages/home/Home'
import Index from '../pages/index/Index'
import ApplyManage from '../pages/applyManage/ApplyManage'
import Login from '../pages/login/Login'
import Error from '../pages/error/Error'

class routers extends React.Component {

    constructor(props){
        super(props);
        this.state={}
    }

    render() {
        return (
            <Router>
                <Switch>
                    
                    <Route path="/login" render={(props)=>
                        <Login {...props}/>
                    } />
                    
                    <Route  path= '/' render={(props)=>
                        <Index {...props}>
                             <Route path="/home" render={(props)=>
                                <Home {...props}/>} />
                             <Route path="/applyManage" render={(props)=>
                                <ApplyManage {...props}/>
                            }/>
                        </Index>
                    }
                    />
                   
                    <Route exact component= {Error}/>
                </Switch>
            </Router>
        );
    }
}

export default routers;