
import React, { Component } from 'react';
import './css/TodoList.css'
import TodoListTask from './TodoListTask'
import todoListModel from './models/listModel'
import trash from './media/trash.png'

class TodoList extends Component {

    state = {
        todoListArray: todoListModel,
        newTask : '',
        viewAllTasks: false,
        trashCanHidden: true,
        currentItemDragged: -1
    }

    render() {
        var listItems;
        const completeTaskList = this.state.todoListArray;
        var taskState = ''
        if(this.state.viewAllTasks){
            listItems = completeTaskList.map((l) =>
                <TodoListTask key={l.id} id={l.id} description={l.description} completed={l.completed} taskCompletedCheckBoxStateHandler={this.taskCompletedCheckBoxStateHandler} drag={this.drag} dragEnd={this.dragEnd}></TodoListTask>
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
                <TodoListTask key={l.id} id={l.id} description={l.description} completed={l.completed} taskCompletedCheckBoxStateHandler={this.taskCompletedCheckBoxStateHandler} drag={this.drag} dragEnd={this.dragEnd}></TodoListTask>
            )
            taskState = 'Show All Tasks'
        }

        return (
            <div className="TodoList">
                <button className="TaskToggleButton" onClick={this.viewAllTasks}>{taskState}</button>
                <ul>
                    {listItems}
                </ul>
                <div className="Trash-logo" onDrop={this.drop} onDragOver={this.allowDrop}>
                    <img src={trash}  alt="trash" hidden={this.state.trashCanHidden}/> 
                </div>
                <div>
                    <form onSubmit={this.addNewTask}>
                        <label>
                            <input className="NewTaskInput" type="text" value={this.state.newTask} onChange={this.handleNewTaskChange} required/>
                        </label>
                        <input className="AddNewTask" type="submit" value="Add New Task"/>
                    </form>
                </div>
            </div>
        )
    }

    /**
     * called every time there is a change in input field
     */
    handleNewTaskChange= (event) =>{
        this.setState({
            newTask: event.target.value
        })
    }

    /**
     * sets state of list item being dragged
     * to potentially drop in trash can
     */
    drag = (id) => {
        this.setState ({
            trashCanHidden : false,
            currentItemDragged: id
        })
    }
    
    /**
     * if item is not dropped in div where drops are allowable
     * reset current image id and hide trash can
     */
    dragEnd = () =>{
        this.setState({
            trashCanHidden: true,
            currentItemDragged : -1
        })
    }

    /**
     * when dragged list item 
     * is over div, this function is called
     */
    allowDrop = (event)=>{
        event.preventDefault();
    }

    /**
     * when list item is dropped on trash can
     * temp array of list items splices item by index
     * trash can is hidden and state of array list is updated
     */
    drop = (event) =>{
        event.preventDefault();

        const tempListArray = this.state.todoListArray

        for (var i in tempListArray){
            if(tempListArray[i].id === this.state.currentItemDragged){
                tempListArray.splice(i, 1)        
            }
        }

        this.setState ({
            trashCanHidden : true,
            currentItemDragged: -1,
            todoListArray: tempListArray
        })
    }

    /**
     * adds new todo item to list
     */
    addNewTask = (event) => {
        event.preventDefault();

        var tempTodoListItem = {
            'id': todoListModel.length + 1,
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