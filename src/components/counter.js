import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';

const Counter = ({ counter, inc, dec }) => {
    return (
        <div className="jumbotron">
            <h2>Counter</h2>
            <button
                onClick={dec}
                className="btn btn-outline-dark btn-lg">-</button>
            <button
                    onClick={counter}
                    className="btn btn-primary btn-lg">{counter}</button>
            <button
                onClick={inc}
                className="btn btn-outline-dark btn-lg">+</button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        counter: state
    };
};

export default connect(mapStateToProps, actions)(Counter);