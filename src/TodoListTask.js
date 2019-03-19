
import React, {Component} from 'react';
import './css/TodoListTask.css'
import TodoListCompletionCheckbox from './TodoListCompletionCheckbox'

class TodoListTask extends Component{

    render(){
        return(
            <li className="listItem">
                <p>{this.props.description}</p>
                <TodoListCompletionCheckbox id={this.props.id} completed={this.props.completed} taskCompletedCheckBoxStateHandler={this.props.taskCompletedCheckBoxStateHandler}></TodoListCompletionCheckbox>
            </li>
        )
    }
}

export default TodoListTask;