import Index from '../pages/index/Index';
import Login from '../pages/login/Login';

const Routes = [
    {
        path: '/',
        component:Index,
        exact:true
    },
    {
        path: '/login',
        component:Login
    }
]

export default Routes;
