import * as React from 'react';

import { connect } from 'react-redux';

import { Button, ButtonGroup } from 'reactstrap';

import { change_title } from '../reduxs/title.js';

class Demo extends React.Component {

    constructor(props){
        super(props);

        this.state={
            title: ['Left', 'Middle', 'Right']
        }

        this.onClick = this.onClick.bind(this);
    }

    onClick(message) {
        this.props.change_title(message);
    }

    render() {
        return (
            <ButtonGroup>
                {
                    this.state.title.map((item, index) => {
                        return <Button color="success" onClick={() => this.onClick({ message: item })} key={index} >{item}</Button>
                    })
                }
            </ButtonGroup>
        );
    }

}

const mapDispatchToState = dispatch => ({
    change_title: title => dispatch(change_title(title))
});

export default connect(null, mapDispatchToState)(Demo);