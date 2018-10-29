import * as actionTypes from './actionsTypes';
//Sync action
export const saveResult =(result)=> {
   //const updatedResult = result*2;
    return {
        type: actionTypes.STORE_RESULT,
        result: result
    };
}

//Async Action calls the sync action
export const storeResult  = (result) => {
  
    return (dispatch, getState) =>{
        setTimeout(()=> {
            const oldCounter = getState().ctr.counter;
            console.log(oldCounter);
            dispatch(saveResult(result))
        },2000);
    }
   
};

export const deleteResult  = (resultId) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultId: resultId
    };
};