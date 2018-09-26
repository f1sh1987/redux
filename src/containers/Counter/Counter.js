import React, { Component } from 'react';
import {connect} from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions';

class Counter extends Component {
    state = {
        counter: 0
    }



    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 10" clicked={this.props.onADDIncrementCounter}  />
                <CounterControl label="Subtract 15" clicked={this.props.onSubstractCounter}  />
                <hr />
                <button onClick={() =>this.props.onStoreResult}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(item => ( 
                    <li key={item.id} onClick={() =>this.props.onDeleteResult(item.id)}>{item.value}:{item.id.toString()}</li>) )}
                   
                </ul>
            </div>
        );
    }
}

const mapStatetoProps = state  => {
    return {
        ctr: state.ctr.counter,
        storedResults:state.res.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type:actionTypes.INCREMENT, val:1}),
        onDecrementCounter: () => dispatch({type:actionTypes.DECREMENT, val:1}),
        onADDIncrementCounter: () => dispatch({type:actionTypes.ADD, val:10}),
        onSubstractCounter: () => dispatch({type:actionTypes.SUBSTRACT, val:15}),
        onStoreResult: (result)  => dispatch({type:actionTypes.STORE_RESULT, result:result}),
        onDeleteResult: (id)  => dispatch({type:actionTypes.DELETE_RESULT, resultElId:id})
    }
    
        
   
};

export default connect(mapStatetoProps, mapDispatchToProps)(Counter);