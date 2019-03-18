
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './TodoListTask.css'
import TodoListCompletionCheckbox from './TodoListCompletionCheckbox'

class TodoListTask extends Component{

    constructor(props){
        super(props);
    }

    componentWillMount(){
        
    }

    render(){
        return(
            <li className="listItem">
                <p>{this.props.description}</p>
                <TodoListCompletionCheckbox completed={this.props.completed} stateHandler={this.props.stateHandler}></TodoListCompletionCheckbox>
            </li>
        )
    }

    checkBoxToggled(){
        console.log("Checkbox toggled")
        this.props.stateHandler()
    }
}

TodoListTask.propTypes = {
    stateHandler: PropTypes.func
}

export default TodoListTask;