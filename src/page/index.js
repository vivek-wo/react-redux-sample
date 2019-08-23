import React from "react";
import "./../styles.css";
import {connect} from "react-redux";
import {addTask, loginAndout} from "./../redux/actions";
import TaskList from "./TaskList";

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {input: ""};
    }

    updateInput = input => {
        this.setState({input});
    };

    loginClick = () => {
        let {isLogin} = this.props;
        this.props.loginAndout(!isLogin, new Date());
    };

    addTaskClick() {
        this.props.addTask(this.state.input);
        this.setState({
            input: ""
        });
    }

    render() {
        const loginText = this.props.isLogin ? "Logout" : "Login";
        const date = this.props.date.toLocaleString();
        return (
            <div>
                <h1>React-Redux Sample</h1>
                <div className="login">
                    <button onClick={this.loginClick}>{loginText}</button>
                    <span className="margin-left">{loginText + " In " + date}</span>
                </div>
                <input
                    onChange={e => {
                        this.updateInput(e.target.value);
                    }}
                    value={this.state.input}
                />
                <button
                    style={{marginLeft: "10px"}}
                    onClick={() => this.addTaskClick()}
                >
                    Add Task
                </button>
                <TaskList/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log(state);
    return state.loginReducer;
};

export default connect(
    mapStateToProps,
    {loginAndout, addTask}
)(Index);
