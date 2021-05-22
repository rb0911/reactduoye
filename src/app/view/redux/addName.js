import { Add_USER } from './actions';
import defaultState from './initState';

export default {
    like(state = defaultState.like, action){
        switch (action.type){
            case Add_USER:
                return action.payload;
            default:
                return state;
        }
}
}
