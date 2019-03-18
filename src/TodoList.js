
import React, {Component} from 'react';
import './TodoList.css'
import TodoListTask from './TodoListTask'
var todoListLocalArray = ['buy juice', 'take girls to school', 'finish todo list app']
class TodoList extends Component{

    constructor(props){
        super(props);

        this.state = {
            todoListArray : todoListLocalArray
        }
    }

    componentWillMount(){
        
    }

    render(){
        return(
            <div>
                <ul>
                <TodoListTask></TodoListTask>
                <TodoListTask></TodoListTask>
                <TodoListTask></TodoListTask>
                <TodoListTask></TodoListTask>
                <TodoListTask></TodoListTask>
                </ul>
            </div>
        )
    }


    addTodoTask(){

    }

    deleteTodoTask(){

    }

    updateTodoTask(){

    }

    viewAllTasks(){

    }

    markTaskComplete(){

    }

    markTaskIncomplete(){

    }
}

export default TodoList;