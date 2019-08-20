import { combineReducers } from 'redux';
import datas from './enter_reducers';
import { reducer as formReducer } from 'redux-form';
const rootReducer = combineReducers({
    datas,
    form: formReducer
});
export default rootReducer;