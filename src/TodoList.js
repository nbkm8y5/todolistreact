
import React, { Component } from 'react';
import './css/TodoList.css'
import TodoListTask from './TodoListTask'
import Alert from './Alert'
import trash from './media/trash.svg'

class TodoList extends Component {
    
    state = {
        todoList: [],
        newTask : '',
        viewAllTasks: false,
        trashCanHidden: true,
        currentItemDragged: -1,
        listStatusAlert: false,
        hideViewTasksButton: true
    }

    UNSAFE_componentWillMount(){
        this.loadOffline()
    }

    render() {
        var listItems;
        const completeTaskList = this.state.todoList;
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

            var alert = {}

            const alertAllTasksComplete = {
                'cssClass' : 'alert-tasks-complete',
                'alertDescription' : 'Congratulations!  You finished all your todo list tasks!'
            }

            if(this.state.todoList.length === 0 || this.state.todoList === null){
                alert = {
                    'cssClassName' : 'alert-no-tasks'//,
                    // 'description' : 'There are no tasks to do. Press "+" to add a new task'
                }
            }    

        return (
            <div className="TodoList">
                <button className="TaskToggleButton" onClick={this.viewAllTasks} hidden={this.state.hideViewTasksButton}>{taskState}</button>
                <Alert alertClass={alert.cssClassName} alertDescription={alert.description} listAlertStatus={this.state.listStatusAlert}></Alert>
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

        const tempDropList = this.state.todoList

        for (const element of tempDropList){
            if(element.id === this.state.currentItemDragged){
                tempDropList.splice(element, 1)
            }
        }

        if(tempDropList.length === 0){
            console.log('list empty. clearing window.localstorage')

            this.setState ({
                trashCanHidden : true,
                currentItemDragged: -1,
                todoList: tempDropList,
                listStatusAlert: false,
                hideViewTasksButton: true
            })
        }else{
            console.log('list not empty. not clearing window.localstorage')

            this.setState ({
                trashCanHidden : true,
                currentItemDragged: -1,
                todoList: tempDropList
            })
        }
        this.saveOffline()
    }

    /**
     * adds new todo item to list
     */
    addNewTask = (event) => {
        event.preventDefault();

        var tempTodoListItem = {
            'id': this.state.todoList.length + 1,
            'description': this.state.newTask,
            'completed': false
        }

        const tempAddList = this.state.todoList
        tempAddList.push(tempTodoListItem)
        this.setState({
            todoList: tempAddList,
            newTask: '',
            listStatusAlert: true,
            hideViewTasksButton: false
        })
        this.saveOffline()
    }

    /**
     * default state is only show uncompleted tasks
     * toggles between uncompleted and completed tasks
     */
    viewAllTasks = (event) => {
        event.preventDefault();
        this.setState({
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
        const completeTaskChangeList = this.state.todoList

        //changed to for of loop
        for(const element of completeTaskChangeList){
            if(element.id === id){
                element.completed = !element.completed
            }
        }

        this.setState({
            todoList: completeTaskChangeList
        })
        this.saveOffline()
    }

    loadOffline = () => {

        var mtua = JSON.parse(window.localStorage.getItem("list"))

        if (mtua === null) {
            console.log('loading offline...')
            console.log("offline list null...")
            console.log("loading empty list...")
        } else {
            console.log('loading offline...')
            console.log('offline not null...')

            if (mtua.length === 0) {
                console.log("list length zero...")
                this.setState({
                    listStatusAlert: false,
                    hideViewTasksButton: true
                })
            } else {
                console.log("list length greater than zero...")
                this.setState({
                    todoList: JSON.parse(window.localStorage.getItem("list")),
                    listStatusAlert: true,
                    hideViewTasksButton: false
                })
            }
        }
    }

    saveOffline = () => {
        window.localStorage.setItem("list", JSON.stringify(this.state.todoList))
    }
}

export default TodoList;