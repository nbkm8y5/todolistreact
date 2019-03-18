
import React, { Component } from 'react';
import './css/TodoList.css'
import TodoListTask from './TodoListTask'

var todoListLocalArray = [
    {
        'id': 0,
        'description': 'buy juice',
        'completed': true
    },
    {
        'id': 1,
        'description': 'take girls to school',
        'completed': false
    },
    {
        'id': 2,
        'description': 'finish todo list app',
        'completed': true
    }]
class TodoList extends Component {

    state = {
        todoListArray: todoListLocalArray,
        newTask : ''
    }

    stateHandler = () => {
        console.log("state handler called")
    }

    render() {

        const list = this.state.todoListArray;
        const listItems = list.map((l) =>
            <TodoListTask key={l.id} description={l.description} completed={l.completed} stateHandler={this.stateHandler}></TodoListTask>
        )

        return (
            <div>
                <ul>
                    {listItems}
                </ul>
                <div>
                    <form onSubmit={this.addNewTask}>
                        <label>
                            <input type="text" value={this.state.newTask} onChange={this.handleNewTaskChange} />
                        </label>
                        <input type="submit" value="Add New Task"/>
                    </form>
                    <button onClick={this.viewAllTasks}>View All Tasks</button>
                </div>
            </div>
        )
    }

    handleNewTaskChange= (event) =>{
        this.setState({
            newTask: event.target.value
        })
    }

    addNewTask = (event) => {
        event.preventDefault();

        var tempTodoListItem = {
            'id': todoListLocalArray.length + 1,
            'description': this.state.newTask,
            'completed': false
        }

        todoListLocalArray.push(tempTodoListItem)

        this.setState({
            todoListArray: todoListLocalArray,
            newTask: ''
        })
    }

    deleteTodoTask = (event) => {
        event.preventDefault();
    }

    updateTodoTask = (event) => {
        event.preventDefault();
    }

    viewAllTasks = (event) => {
        event.preventDefault();
        console.log("View all tasks button clicked");
        //default state is only show uncompleted tasks
        //this will show all tasks completed and uncompleted
    }

    markTaskComplete = () => {

    }

    markTaskIncomplete = () => {

    }
}

export default TodoList;