
import React, {Component} from 'react';
import './css/TodoListTask.css'
import TodoListCompletionCheckbox from './TodoListCompletionCheckbox'

class TodoListTask extends Component{

    render(){
        return(
            <li className="listItem">
                <div className="listItemOuterBox">
                    <div className="TaskDescription">
                        <p>{this.props.description}</p>
                    </div>
                    <TodoListCompletionCheckbox id={this.props.id} completed={this.props.completed} taskCompletedCheckBoxStateHandler={this.props.taskCompletedCheckBoxStateHandler}></TodoListCompletionCheckbox>
                </div>
            </li>
        )
    }
}

export default TodoListTask;