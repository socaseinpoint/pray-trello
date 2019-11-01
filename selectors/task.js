export const getTaskList = (state) => state.task;
export const getMyTaskList = (state) => ({...state.task, results: state.task.results.filter((task) => task.isMy)});
export const getSubTaskList = (state) => ({...state.task, results: state.task.results.filter((task) => !task.isMy)});
export const getTask = (state, id) => state.task.results.find((task) => task.id === id);
export const getTaskMembers = (state, members) => members.map((memberId) => state.task.users.find((user) => user.id === memberId));
export const getTaskComments = (state, comments) => comments.map((commentId) => state.task.comments.find((comment) => comment.id === commentId));
export const getTaskCommentsWithAuthor = (state, comments) => getTaskComments(state,comments).map((comment) => ({
  ...comment,
  author: state.task.users.find((user) => user.id === comment.author),
}));
