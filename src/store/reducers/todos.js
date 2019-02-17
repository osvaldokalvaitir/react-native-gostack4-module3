const initialState = [{ id: 0, text: 'Fazer café' }, { id: 1, text: 'Estudar React Native' }];

export default function todos(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Math.random(), text: action.payload.text }];
    default:
      return state;
  }
}
