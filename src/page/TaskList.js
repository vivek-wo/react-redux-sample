import React from "react";
import {connect} from "react-redux";
import Task from "./Task";
import {getTaskList} from "../redux/selectors";

const TaskList = ({tasks}) => {
    return (
        <ul className="task-list">
            {tasks && tasks.length
                ? tasks.map((task, index) => {
                    return <Task key={`task-${task.id}`} task={task}/>;
                })
                : "No Tasks!"}
        </ul>
    );
};

const mapStateToProps = (state, ownProps) => {
    const tasks = getTaskList(state);
    console.log(tasks);
    return {tasks};
};

export default connect(mapStateToProps)(TaskList);
