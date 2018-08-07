import * as React from 'react';

import { connect } from 'react-redux';

import { change_title } from '../reduxs/demo.js';
 
class Demo extends React.Component{

    render(){
        return (
            <div className="App">
                <p> {this.props.title} </p>
                <button onClick={ () => this.props.change_title('piu')} > piu </button>
            </div>
        );
    }

}

const mapPropsToState = state => ({
    state,
    title: state.demo.title
});

const mapDispatchToState = dispatch => ({
    change_title: title => dispatch(change_title(title))
});

export default connect(mapPropsToState, mapDispatchToState)(Demo);