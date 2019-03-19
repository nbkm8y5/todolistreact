
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
        'completed': true
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
        'completed': true
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

    render() {
        var listItems;
        const completeTaskList = this.state.todoListArray;

        if(this.state.viewAllTasks){
            listItems = completeTaskList.map((l) =>
                <TodoListTask key={l.id} id={l.id} description={l.description} completed={l.completed} taskCompletedCheckBoxStateHandler={this.taskCompletedCheckBoxStateHandler}></TodoListTask>
            )
        }else{
            var uncompletedTaskList = [];
            completeTaskList.forEach((item) => {
                if(!item.completed){
                    uncompletedTaskList.push(item)
                }
            })
            listItems = uncompletedTaskList.map((l) =>
                <TodoListTask key={l.id} id={l.id} description={l.description} completed={l.completed} taskCompletedCheckBoxStateHandler={this.taskCompletedCheckBoxStateHandler}></TodoListTask>
            )
        }

        return (
            <div>
                <button onClick={this.viewAllTasks}>Toggle All Tasks</button>
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
            'id': todoListLocalArray.length,
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

    /**
     * provides id of task item where completion checkbox was toggled to change state in parent or
     * in this case grandparent
     */
    taskCompletedCheckBoxStateHandler = (id) => {
        this.toggleTaskComplete(id)
    }

      /**
     * toggles completed tasks
     */
    toggleTaskComplete = (id) => {
        const listArray = this.state.todoListArray
        for (var i in listArray){
            if(listArray[i].id === id){
                listArray[i].completed = !listArray[i].completed
            }
        }
        this.setState({
            todoListArray: listArray
        })
    }
}

export default TodoList;