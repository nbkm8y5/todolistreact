
import React, { Component } from 'react';
import './css/TodoList.css'
import TodoListTask from './TodoListTask'
import todoListModel from './models/listModel'

class TodoList extends Component {

    state = {
        todoListArray: todoListModel,
        newTask : '',
        viewAllTasks: false
    }

    render() {
        var listItems;
        const completeTaskList = this.state.todoListArray;
        var taskState = ''
        if(this.state.viewAllTasks){
            listItems = completeTaskList.map((l) =>
                <TodoListTask key={l.id} id={l.id} description={l.description} completed={l.completed} taskCompletedCheckBoxStateHandler={this.taskCompletedCheckBoxStateHandler}></TodoListTask>
            )
            taskState = 'Show Remaining Tasks'
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
            taskState = 'Show All Tasks'
        }

        return (
            <div>
                <button onClick={this.viewAllTasks}>{taskState}</button>
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
            'id': todoListModel.length,
            'description': this.state.newTask,
            'completed': false
        }

        todoListModel.push(tempTodoListItem)

        this.setState({
            todoListArray: todoListModel,
            newTask: ''
        })
    }

    /**
     * default state is only show uncompleted tasks
     * toggles between uncompleted and completed tasks
     */
    viewAllTasks = (event) => {
        event.preventDefault();
        this.setState({
            todoListArray: todoListModel,
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