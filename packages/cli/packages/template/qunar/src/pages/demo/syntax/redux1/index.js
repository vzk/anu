import React from '@react';
import { connect } from 'react-redux';
//import store from '../../../../store/index';

const mapState = state => ({
    count: state.count
});
  
const mapDispatch = ({ count: { increment, incrementAsync }}) => ({
    increment: () => increment(1),
    incrementAsync: () => incrementAsync(1)
});

class P extends React.Component {
    constructor(props) {
        super(props);
        this.increment = props.increment;
        this.incrementAsync = props.incrementAsync;
    }
    render(){
        return <div>
            <p>{this.props.count}</p>
            <button onClick={this.increment} >+1</button>
        </div>;
    }
}

export default  connect(mapState, mapDispatch)(P);
