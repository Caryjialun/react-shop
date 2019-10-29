import React from 'react';
import Routes from './router/router';
import 'antd/dist/antd.css'; //样式引入
import {BrowserRouter as Router,Route} from 'react-router-dom';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state ={};
  }

  render(){
    return (
      <Router>
        <div>
        {
            Routes.map((route,key)=>{

              if(route.exact && route.routes === undefined){
                return <Route key={key} exact path={route.path} 
                component={props =><route.component {...props}/>}/>
              }

              if(route.routes!==undefined){
                return <Route key={key} path={route.path} 
    
                render={
                  props=>( <route.component {...props} component={route.routes}/>)
                }
                  component={route.component} 
                />
              }

              if(route.exact && route.routes !==undefined){
                return <Route key={key} exact path={route.path} 
                  render={
                    props=>( <route.component {...props} component={route.routes}/>)
                  }

                    component={route.component} 
                  />
              }

              // return  <Route key={key} path={route.path} component={route.component}/>
              return <Route key={key} path={route.path} 
              component={props =><route.component {...props}/>}/>
            })
          }
        </div>
      </Router>
      
    )
  }
  
}

export default App;
