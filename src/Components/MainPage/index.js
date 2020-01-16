import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDailyNews } from '../../thunks';

const MainPage = () => {
  return (
    <div>

    </div>
  );
}

// const useFetching = getDaily => {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getDailyNews());
//   }, []);
// };

export const useCustomReducer = (reducerFun, initialState) => {
  const [state, dispatch] = useReducer(reducerFun, initialState);
  return [state, dispatch];
}

export default MainPage;