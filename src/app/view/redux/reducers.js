import { CHANGE_USER } from './actions';
import initState from './initState';

export default{
    name(state = 'name', action){
        switch (action.type){
            case CHANGE_USER:
                return action.payload;
            default:
                return state;
        }
    },
    id(state = 'id', action){
        switch (action.type){
            case CHANGE_USER:
                return action.payload;
            default:
                return state;
        }
    }
}