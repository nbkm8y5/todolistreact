
import React, {Component} from 'react';
import './css/TodoListTask.css'
import PropTypes from 'prop-types';
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
            <li className={style} draggable="true" onDragStart={this.taskItemDragStarted} onDragEnd={this.taskItemDragEnded}>
                <div className="listItemOuterBox">
                    <div className="TaskDescription">
                        <p>{this.props.description}</p>
                    </div>
                    <TodoListCompletionCheckbox id={this.props.id} completed={this.props.completed} taskCompletedCheckBoxStateHandler={this.props.taskCompletedCheckBoxStateHandler}></TodoListCompletionCheckbox>
                </div>
            </li>
        )
    }

    taskItemDragStarted = ()=>{
        this.props.drag(this.props.id)
    }

    taskItemDragEnded = ()=>{
        this.props.dragEnd()
    }
}


TodoListTask.propTypes = {
    drag : PropTypes.func,
    dragEnd: PropTypes.func
}

export default TodoListTask;