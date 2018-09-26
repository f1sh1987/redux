import * as actionTypes from '../actions';

const inititalState = {
    counter:0
}

const reducer = (state =inititalState,action) => {

    //return leaves the loop
switch (action.type) {
    case actionTypes.INCREMENT:
        const newState = Object.assign({},state);
        newState.counter = state.counter+1;
        return newState;
    
    case actionTypes.DECREMENT : return {
        ...state,
        counter: state.counter-1
    }
    case actionTypes.ADD:return {
        ...state,
        counter: state.counter+action.val
    }
    case actionTypes.SUBSTRACT:return {
        ...state,
        counter: state.counter/action.val
    }
   
}
      
    return state;
};
export default reducer;