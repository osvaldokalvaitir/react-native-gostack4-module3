export const addFavoriteRequest = repoName => ({
  type: 'ADD_FAVORITE_REQUEST',
  payload: {
    repoName,
  },
});

export const addFavoriteSuccess = repository => ({
  type: 'ADD_FAVORITE_SUCCESS',
  payload: {
    repository,
  },
});

export const addFavoriteError = message => ({
  type: 'ADD_FAVORITE_ERROR',
  payload: {
    message,
  },
});
