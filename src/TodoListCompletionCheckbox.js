
import React, {Component} from 'react';
import './css/TodoListCompletionCheckbox.css'


class TodoListCompletionCheckbox extends Component{

    render(){
        return(
            <div>
                <label>Completed</label>
                <input type="Checkbox" checked={this.props.completed} onChange={this.checkBoxToggled}></input>
            </div>
        )
    }

    checkBoxToggled = () => {
        console.log("Checkbox toggled")
        this.props.stateHandler()
    }
}

// TodoListCompletionCheckbox.PropTypes = {
//     stateHandler: React.PropTypes.function
// }

export default TodoListCompletionCheckbox;