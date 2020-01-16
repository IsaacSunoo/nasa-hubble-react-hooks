export const setError = error => ({
  type: 'SET_ERROR',
  error
});

export const setLoading = isLoading => ({
  type: 'SET_LOADING',
  isLoading
});

export const getDaily = daily => ({
  type: 'GET_DAILY',
  daily
});


