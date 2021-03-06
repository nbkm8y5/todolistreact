
import React from 'react';
import PropTypes from 'prop-types';
import './css/TodoListCompletionCheckbox.css'


class TodoListCompletionCheckbox extends React.Component{

    render(){
        return(
            <div className="checkboxContainer">
                <input type="Checkbox" checked={this.props.completed} onChange={this.checkBoxToggled}></input>
            </div>
        )
    }

    /**
     * passes id of task item that toggled completion to update state in grandparent
     */
    checkBoxToggled = () => {
        this.props.taskCompletedCheckBoxStateHandler(this.props.id)
    }
}

TodoListCompletionCheckbox.propTypes = {
    taskCompletedCheckBoxStateHandler : PropTypes.func
}

export default TodoListCompletionCheckbox;