
import React, { Component } from 'react';
import './css/TodoList.css'
import TodoListTask from './TodoListTask'

var todoListLocalArray = [
    {
        'id': 0,
        'description': 'buy juice',
        'completed': false
    },
    {
        'id': 1,
        'description': 'take girls to school',
        'completed': false
    },
    {
        'id': 2,
        'description': 'finish todo list app',
        'completed': false
    },
    {
        'id': 4,
        'description': 'make todo list app look cool',
        'completed': false
    },
    {
        'id': 5,
        'description': 'watch some tv',
        'completed': false
    },
    {
        'id': 6,
        'description': 'read a book',
        'completed': false
    }]
class TodoList extends Component {

    state = {
        todoListArray: todoListLocalArray,
        newTask : '',
        viewAllTasks: false
    }

    stateHandler = () => {
        console.log("state handler called")
    }

    render() {
        var listItems;
        const completeTaskList = this.state.todoListArray;

        if(this.state.viewAllTasks){
            listItems = completeTaskList.map((l) =>
                <TodoListTask key={l.id} description={l.description} completed={l.completed} stateHandler={this.stateHandler}></TodoListTask>
            )
        }else{
            var uncompletedTaskList = [];
            completeTaskList.forEach((item) => {
                if(!item.completed){
                    uncompletedTaskList.push(item)
                }
            })
            listItems = uncompletedTaskList.map((l) =>
                <TodoListTask key={l.id} description={l.description} completed={l.completed} stateHandler={this.stateHandler}></TodoListTask>
            )
        }

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

    /**
     * default state is only show uncompleted tasks
     * toggles between uncompleted and completed tasks
     */
    viewAllTasks = (event) => {
        event.preventDefault();
        this.setState({
            todoListArray: todoListLocalArray,
            viewAllTasks: !this.state.viewAllTasks
        })
    }

    markTaskComplete = () => {

    }

    markTaskIncomplete = () => {

    }
}

export default TodoList;