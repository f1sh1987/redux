import * as actionTypes from '../actions/actionsTypes';
import {updateObject} from '../utility'

const inititalState = {
    results:[]
}

const deleteResult = (state, action) => {
    const updatedArray = state.results.filter(result => result.id !== action.resultId );
    return updateObject(state,{results:updatedArray});
} 

const reducer= (state =inititalState,action) => {

    //return leaves the loop
switch (action.type) {
   
      //push would touch the old state
    case actionTypes.STORE_RESULT:
    return updateObject(state,{results:state.results.concat({id: new Date(),value: action.result*2})});
   /* return {
        ...state,
       results:state.results.concat({id: new Date(),value: action.result*2})
    }
    */
    case actionTypes.DELETE_RESULT:
    //const id=2;
    //const newArray = [...state.results];
    //state.results.splice(id,1);
    
    return deleteResult(state,action);
  /*  return {
        ...state,
        results:updatedArray
    }
    */
}
      
    return state;
};
export default reducer;