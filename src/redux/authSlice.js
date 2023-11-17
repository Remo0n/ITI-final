import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const checkAuthStatus = createAsyncThunk(
  "auth/checkStatus",
  async (_, { dispatch }) => {
    const auth = getAuth();
    return new Promise((resolve, reject) => {
      const unsubscribe = onAuthStateChanged(
        auth,
        (user) => {
          unsubscribe();
          if (user) {
            dispatch(
              setUser({
                uid: user.uid,
                email: user.email,
              })
            );
          } else {
            dispatch(logout());
          }
          resolve(user ? user : null);
        },
        (error) => {
          // Error handling
          dispatch(logout());
          reject(error);
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
    [checkAuthStatus.fulfilled]: (state) => {
      state.loading = false;
    },
    [checkAuthStatus.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
  },
});

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;
