
import React, {Component} from 'react';
import './TodoListTask.css'
import TodoListTaskButton from './TodoListTaskButton'

class TodoListTask extends Component{

    constructor(props){
        super(props);
    }

    componentWillMount(){
        
    }

    render(){
        return(
            <li>
                <p>Todo List Task</p>
                <TodoListTaskButton></TodoListTaskButton>
            </li>
        )
    }
}

export default TodoListTask;