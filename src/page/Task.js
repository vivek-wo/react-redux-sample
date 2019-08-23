import React from "react";
import {connect} from "react-redux";
import cx from "classnames";
import {toggleTask} from "./../redux/actions";

class Task extends React.Component {
    render() {
        const {task, toggleTask} = this.props;
        return (
            <li
                className="task-item"
                onClick={() => {
                    toggleTask(task.id, !task.completed);
                }}
            >
        <span className={cx({"task-item__text--completed": task.completed})}>
          {task.content}
        </span>
            </li>
        );
    }
}

export default connect(
    null,
    {toggleTask}
)(Task);
