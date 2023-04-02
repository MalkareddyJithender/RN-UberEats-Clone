import {configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';

import RestaurantReducer from './features/restaurant';
import AuthReducer from './features/auth';

const store = configureStore({
  reducer: {
    restaurant: RestaurantReducer,
    auth: AuthReducer,
  },
});

store.subscribe(() => {
  console.log('store ----->>>>>>>>>>>>>>>>>>', store.getState());
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatchType = typeof store.dispatch;
export const useAppDispatch: () => AppDispatchType = useDispatch;

export default store;
