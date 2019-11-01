export const getDeskList = (state) => state.desk;
export const getDesk = (state, id) => state.desk.results.find((desk) => desk.id === id);