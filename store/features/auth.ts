import {createSlice, PayloadAction} from '@reduxjs/toolkit';

// types
interface IUser {
  email: string | null;
  uid: string;
}

interface IGoogleUser {
  uid: string;
  displayName: string | null;
  email: string | null;
  photoUrl: string | null;
}

interface SliceState {
  user: IUser | null;
  googleUser: IGoogleUser | null;
}

const initialState: SliceState = {
  user: null,
  googleUser: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
      state.googleUser = null;
    },
    setGoogleUser: (state, action: PayloadAction<IGoogleUser>) => {
      debugger;
      console.log('payload', action.payload);
      state.googleUser = action.payload;
      state.user = null;
    },
  },
});

// action generators
export const setUser = authSlice.actions.setUser;
export const setGoogleUser = authSlice.actions.setGoogleUser;

export default authSlice.reducer;