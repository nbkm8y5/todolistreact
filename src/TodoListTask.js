
import React, {Component} from 'react';
import './css/TodoListTask.css'
import TodoListCompletionCheckbox from './TodoListCompletionCheckbox'

class TodoListTask extends Component{

    render(){

        var style = '';
        if(this.props.completed){
            style = 'listItemCompleted'
        }else{
            style = 'listItemUncompleted'
        }

        return(
            <li className={style}>
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