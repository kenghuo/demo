import * as React from 'react';

import { connect } from 'react-redux';

class Title extends React.Component{

    render(){
        return (
            <div>
                <p> {this.props.title.message} </p>
            </div>
        );
    }

}

const mapPropsToState = state => ({
    title: state.title.title
});

export default connect(mapPropsToState)(Title);