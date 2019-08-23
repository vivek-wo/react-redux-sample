import {combineReducers} from "redux";
import {LOGIN_STATE} from "../actionTypes";

import taskReducer from "./task";

const initialState = {
    initFirst: false,
    isLogin: false,
    date: new Date()
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_STATE:
            const {isLogin, date} = action.payload;
            return {
                ...state,
                isLogin: isLogin,
                date: date
            };
        default:
            return state;
    }
};

export default combineReducers({loginReducer, taskReducer});
