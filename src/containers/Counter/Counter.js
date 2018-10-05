import React, { Component } from 'react';
import {connect} from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionCreators from '../../store/actions/actions';


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
        onIncrementCounter: () => dispatch(actionCreators.increment()),
        onDecrementCounter: () => dispatch(actionCreators.decrement()),
        onADDIncrementCounter: () => dispatch(actionCreators.add(10)),
        onSubstractCounter: () => dispatch(actionCreators.substract(5)),
        onStoreResult: (result)  => dispatch(actionCreators.storeResult(result)),
        onDeleteResult: (id)  => dispatch(actionCreators.deleteResult(id))
    }
    
        
   
};

export default connect(mapStatetoProps, mapDispatchToProps)(Counter);