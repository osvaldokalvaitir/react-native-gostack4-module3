const initialState = [];

export default function favorites(state = initialState, action) {
  switch (action.type) {
    case 'ADD_FAVORITE_SUCCESS':
      return [...state, action.payload.repository];
    default:
      return state;
  }
}
