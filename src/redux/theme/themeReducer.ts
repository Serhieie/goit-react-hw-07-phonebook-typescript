import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export interface ThemeState {
  darkTheme: boolean;
}

const initialState: ThemeState = {
  darkTheme: false,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<boolean>) => {
      state.darkTheme = action.payload;
    },
  },
});

const persistConfig = {
  key: 'theme',
  storage,
  blacklist: ['contacts', 'form', 'filter'],
};

export const persistedThemeReducer = persistReducer<ThemeState>(
  persistConfig,
  themeSlice.reducer
);

export const { setTheme } = themeSlice.actions;
export const selectDarkTheme = (state: { theme: ThemeState }) =>
  state.theme.darkTheme;

export default themeSlice.reducer;
