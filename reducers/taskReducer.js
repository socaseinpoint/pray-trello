const initialState = {
  loading: false,
  error: null,
  results: [
    {
      id: 1,
      name: 'Prayer item',
      desk: 1,
      done: false,
      type: 'my',
    },
  ],
};

const taskReducer = (state = initialState) => {
  return state;
};

export default taskReducer;
