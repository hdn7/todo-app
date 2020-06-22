// export const initialState = {
//   tasks: [],
// };

export const initialState = {
  // Mock-up tasks list
  tasks: [
    {
      id: 0,
      date: '07:00AM',
      description: 'Send email',
      tag: 'Work',
    },
    {
      id: 1,
      date: '07:00AM',
      description: 'Groceries',
      tag: 'Shop',
    },
    {
      id: 2,
      date: '10:00AM',
      description: 'Study',
      tag: 'Study',
    },
  ],
};

export const tasksReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      const newId = Math.max(state.tasks.map((task) => task.id));
      return { tasks: state.tasks.concat({ ...action.task, id: newId }) };
    default:
      throw new Error();
  }
};
