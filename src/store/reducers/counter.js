import * as actionTypes from '../actions/actionsTypes';
import {updateObject} from '../utility' 

const inititalState = {
    counter:0
}

const reducer = (state =inititalState,action) => {

    //return leaves the loop
switch (action.type) {
    case actionTypes.INCREMENT:
    return updateObject(state,{counter: state.counter+1})
    /*  
    const newState = Object.assign({},state);
        newState.counter = state.counter+1;
        return newState;
    */
    case actionTypes.DECREMENT :
    return updateObject(state,{counter: state.counter-1})
    /*
    return {
        ...state,
        counter: state.counter-1
    } */
    case actionTypes.ADD:
    return updateObject(state,{counter:state.counter+action.val})
    /*
    return {
        ...state,
        counter: state.counter+action.val
    } */
    case actionTypes.SUBSTRACT:
    return updateObject(state,{counter:state.counter/action.val})
   /* return {
        ...state,
        counter: state.counter/action.val
    }
   */
}
      
    return state;
};
export default reducer;