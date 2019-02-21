import { all, takeLatest } from 'redux-saga/effects';

import { Types as FavoriteTypes } from '~/store/ducks/favorites';
import { addFavoriteRequest } from './favorites';

export default function* rootSaga() {
  return yield all([takeLatest(FavoriteTypes.ADD_REQUEST, addFavoriteRequest)]);
}
