import {configureStore} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {
  FeedbackSlice, LoadingSlice
} from '../types/reducers';
import feedback from './reducers/feedback';
import loading from './reducers/loading';

export const store = configureStore({
  reducer: {
    feedback,
    loading
  }
});

export type ReduxStoreStateType = {
  feedback: FeedbackSlice,
  loading: LoadingSlice
};

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<ReduxStoreStateType> = useSelector;

export default store;
