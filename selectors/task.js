export const getTaskList = (state) => state.task;
export const getMyTaskList = (state) => ({...state.task, results: state.task.results.filter((task) => task.isMy)});
export const getSubTaskList = (state) => ({...state.task, results: state.task.results.filter((task) => !task.isMy)});
export const getTask = (state, id) => state.task.results.find((task) => task.id === id);
