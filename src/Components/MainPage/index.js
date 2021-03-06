import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDailyNews } from '../../thunks';
import ParticlesContainer from '../Particles';

const MainPage = () => {
  const { daily } = useSelector(state => ({
    daily: state.daily
  }));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDailyNews());
  }, []);

  const { hdurl, explanation, title, url, date} = daily;

  return (
    <div className='nasa-daily'>
      <ParticlesContainer />
      <h2>{title}</h2>
      <a href={url} ><img src={hdurl} alt='nasa daily img' /></a>
      <p>{date}</p>
      <p>{explanation}</p>
    </div>
  );
}

export default MainPage;