import {ADD_TASK, LOGIN_STATE, TOGGLE_TASK} from "./actionTypes";

let task_id = 0;

export const loginAndout = (isLogin, date) => ({
    type: LOGIN_STATE,
    payload: {isLogin, date}
});

export const addTask = content => {
    return {
        type: ADD_TASK,
        payload: {id: ++task_id, content, completed: false}
    };
};

export const toggleTask = id => {
    return {
        type: TOGGLE_TASK,
        payload: {id}
    };
};
