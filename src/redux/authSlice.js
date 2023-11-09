// authSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const checkAuthStatus = createAsyncThunk(
  "auth/checkStatus",
  async (_, { dispatch }) => {
    const auth = getAuth();
    return new Promise((resolve) => {
      const unsubscribe = onAuthStateChanged(
        auth,
        (user) => {
          unsubscribe(); // Stop listening for auth state changes
          if (user) {
            // Only dispatch the serializable user properties
            dispatch(
              setUser({
                uid: user.uid,
                email: user.email,
                displayName: user.displayName,
                photoURL: user.photoURL,
                // Add other properties you need that are serializable
              })
            );
          } else {
            dispatch(logout());
          }
          resolve();
        },
        () => {
          // Error handling
          dispatch(logout());
          resolve();
        }
      );
    });
  }
);

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: {
    [checkAuthStatus.pending]: (state) => {
      state.loading = true;
    },
    [checkAuthStatus.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    [checkAuthStatus.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;
