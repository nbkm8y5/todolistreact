
import React, {Component} from 'react';
import './TodoList.css'


class TodoList extends Component{

    constructor(props){
        super(props);
        var todoListItemArray = ["Buy orange juice", "Go wash clothes", "Pick up Breanne from school"];
    }

    componentWillMount(){
        
    }

    render(){
        return(
            <div>
                Todo List
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