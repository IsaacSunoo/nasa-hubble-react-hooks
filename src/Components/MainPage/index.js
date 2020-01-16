import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDailyNews } from '../../thunks';

const MainPage = () => {
  const { daily } = useSelector(state => ({
    daily: state.daily
  }));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDailyNews());
  }, []);

  const { hdurl, explanation, title, url} = daily;

  return (
    <div className='nasa-daily'>
      <h2>{title}</h2>
      <a href={url} ><img src={hdurl} alt='nasa daily img' /></a>
      <p>{explanation}</p>
    </div>
  );
}

export default MainPage;