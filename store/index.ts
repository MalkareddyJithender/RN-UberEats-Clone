import {configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import RestaurantReducer from './features/restaurant';

const store = configureStore({
  reducer: {
    restaurant: RestaurantReducer,
  },
});

store.subscribe(() => {
  console.log('store ----->>>>>>>>>>>>>>>>>>', store.getState());
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatchType = typeof store.dispatch;
export const useAppDispatch: () => AppDispatchType = useDispatch;

export default store;
