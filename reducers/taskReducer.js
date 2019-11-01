const initialState = {
  loading: false,
  error: null,
  results: [
    {
      id: 1,
      name: 'Prayer item',
      desk: 1,
      answered: false,
      isMy: true,
      lastPrayed: '01/02/2019',
      prayedTotal: 123,
      prayedByMe: 63,
      prayedByOthers: 60,
      comments: [1],
      createdAt: '01/02/2019',
      members: [1,2],
    },
    {
      id: 2,
      name: 'Prayer item 2',
      desk: 1,
      answered: false,
      isMy: false,
      prayedTotal: 0,
      members: [1,2],
    },
    {
      id: 3,
      name: 'Prayer item 3',
      desk: 1,
      answered: true,
      isMy: true,
      lastPrayed: '03/05/2019',
      prayedTotal: 123,
      prayedByMe: 63,
      prayedByOthers: 60,
      comments: [],
      createdAt: '01/02/2019',
      members: [],
    },
  ],
  users: [
    {
      id: 1,
      name: 'John',
    },
    {
      id: 2,
      name: 'Kate',
    },
  ],
  comments: [
    {
      id: 1,
      author: 1,
      body: 'Hey, Hey!',
      createdAt: '24/06/2019'
    },
  ],
};

const taskReducer = (state = initialState) => {
  return state;
};

export default taskReducer;
