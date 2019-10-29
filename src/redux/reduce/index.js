import {combineReducers} from 'redux';
import { loginReduce } from './login';

const rootReducer = combineReducers({
    loginReduce,
})

export default rootReducer;