import * as actionTypes from '../actions/actions';

const inititalState = {
    results:[]
}

const reducer= (state =inititalState,action) => {

    //return leaves the loop
switch (action.type) {
   
      //push would touch the old state
    case actionTypes.STORE_RESULT:return {
        ...state,
       results:state.results.concat({id: new Date(),value: action.result})
    }
    case actionTypes.DELETE_RESULT:
    //const id=2;
    //const newArray = [...state.results];
    //state.results.splice(id,1);
    const updatedArray = state.results.filter(result => result.id !== action.resultElId )
    return {
        ...state,
        results:updatedArray
    }
}
      
    return state;
};
export default reducer;