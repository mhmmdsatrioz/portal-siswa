import { createSlice } from '@reduxjs/toolkit';

interface IStoreThemes {
  theme: any;
}

const initialState: IStoreThemes = {
  theme: localStorage.getItem('theme') === 'dark' ? true : false,
};

export const ThemeSlice = createSlice({
  name: 'theme',
  initialState: initialState,
  reducers: {
    changeThemes: (state: IStoreThemes) => {
      state.theme = state.theme === true ? false : true;
    },
  },
});

export default ThemeSlice.reducer;
export const { changeThemes } = ThemeSlice.actions;
