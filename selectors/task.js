export const getTaskList = (state) => state.task;
export const getTask = (state, id) => state.task.results.find((task) => task.id === id);
