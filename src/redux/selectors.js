export const getTaskState = state => state.taskReducer;

export const getTaskIds = state =>
    getTaskState(state) ? getTaskState(state).taskIds : [];

export const getTaskById = (state, id) =>
    getTaskState(state) ? {...getTaskState(state).taskByIds[id], id} : {};

export const getTaskList = state => {
    return getTaskIds(state).map(id => getTaskById(state, id));
};
