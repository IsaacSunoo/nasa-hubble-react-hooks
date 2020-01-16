import { setLoading, setError, getDaily } from '../actions';
import { fetchCall } from '../api';
import apiKey from '../apiKey/apiKey';

export const getDailyNews = () => {
  const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
  return async dispatch => {
    try {
      dispatch(setLoading(true));
      const dailyNews = await fetchCall(url);
      dispatch(setLoading(false));
      console.log('daily news in thunk: ', dailyNews);
      dispatch(getDaily(dailyNews));
    } catch (err) {
      dispatch(setError(err.message));
    }
  }
}