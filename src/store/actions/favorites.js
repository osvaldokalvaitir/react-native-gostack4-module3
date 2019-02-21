export const addFavoriteRequest = repoName => ({
  type: 'ADD_FAVORITE_REQUEST',
  payload: {
    repoName,
  },
});
