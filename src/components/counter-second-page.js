import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const CounterSecondPage = ({ counter }) => {
    return (
        <div className="jumbotron">
            <h2>Counter: { counter }</h2>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        counter: state
    };
};

export default connect(mapStateToProps, actions)(CounterSecondPage);