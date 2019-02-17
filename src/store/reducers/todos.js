const initialState = ['Fazer café', 'Estudar React Native'];

export default function todos(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.text];
    default:
      return state;
  }
}
