
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './css/TodoListCompletionCheckbox.css'


class TodoListCompletionCheckbox extends Component{

    constructor(props){
        super(props);
    }

    componentWillMount(){
        
    }

    render(){
        return(
            <div>
                <label>Completed</label>
                <input type="Checkbox" checked={this.props.completed} onChange={this.checkBoxToggled}></input>
            </div>
        )
    }

    checkBoxToggled(){
        console.log("Checkbox toggled")
        this.props.stateHandler()
    }
}

TodoListCompletionCheckbox.propTypes = {
    stateHandler: PropTypes.func
}

export default TodoListCompletionCheckbox;