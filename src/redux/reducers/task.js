import {ADD_TASK, TOGGLE_TASK} from "../actionTypes";

const initialState = {
    taskIds: [],
    taskByIds: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_TASK: {
            const {id, content, completed} = action.payload;
            return {
                ...state,
                taskIds: [...state.taskIds, id],
                taskByIds: {
                    ...state.taskByIds,
                    [id]: {
                        content,
                        completed
                    }
                }
            };
        }
        case TOGGLE_TASK: {
            const {id} = action.payload;
            return {
                ...state,
                taskByIds: {
                    ...state.taskByIds,
                    [id]: {
                        ...state.taskByIds[id],
                        completed: !state.taskByIds[id].completed
                    }
                }
            };
        }
        default:
            return state;
    }
}
