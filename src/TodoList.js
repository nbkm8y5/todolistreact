
import React, {Component} from 'react';
import './TodoList.css'
import './'
import TodoListTask from './TodoListTask'

var todoListLocalArray = [
    {
        'id': 0,
        'description': 'buy juice',
        'completed' : true
    },
    {
        'id': 1,
        'description': 'take girls to school',
        'completed' : false
    }, 
    {
        'id': 2,
        'description': 'finish todo list app',
        'completed' : true
    }]
class TodoList extends Component{

    constructor(props){
        super(props);

        this.state = {
            todoListArray : todoListLocalArray
        }
        this.addTodoTask = this.addTodoTask.bind(this);
        this.viewAllTasks = this.viewAllTasks.bind(this);
        this.stateHandler = this.stateHandler.bind(this);
    }

    componentWillMount(){
        
    }

    stateHandler(){
       console.log("state handler called")
    }

    render(){

        const list = this.state.todoListArray;
        const listItems = list.map((l)=>
            <TodoListTask key={l.id} description={l.description} completed={l.completed} stateHandler={this.stateHandler}></TodoListTask>
        )

        return(
            <div>
                <ul>
                {listItems}
                </ul>
                <div>
                    <button onClick={this.addTodoTask}>+</button>
                    <button onClick={this.viewAllTasks}>View All Tasks</button>
                </div>
            </div>
        )
    }

    addTodoTask(event){
        event.preventDefault();
        console.log('add button clicked');
    }

    deleteTodoTask(event){
        event.preventDefault();
    }

    updateTodoTask(event){
        event.preventDefault();
    }

    viewAllTasks(event){
        event.preventDefault();
        console.log("View all tasks button clicked");
        //default state is only show uncompleted tasks
        //this will show all tasks completed and uncompleted
    }

    markTaskComplete(){

    }

    markTaskIncomplete(){

    }
}

export default TodoList;