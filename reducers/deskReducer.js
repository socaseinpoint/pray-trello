const initialState = {
  loading: false,
  error: null,
  results: [
    {
      id: 1,
      name: 'To Do',
    },
    {
      id: 2,
      name: 'In Progress',
    },
    {
      id: 3,
      name: 'Completed',
    },
  ],
};

const deskReducer = (state = initialState) => {
  return state;
};

export default deskReducer;
