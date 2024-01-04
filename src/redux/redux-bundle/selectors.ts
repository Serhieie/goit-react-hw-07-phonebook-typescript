import { ThemeState } from '../theme/themeReducer';
import { FilterState } from './filterSlice';

export const getFilterValue = (state: { filter: FilterState }) =>
  state.filter.filterValue;
export const getTheme = (state: { theme: ThemeState }): boolean =>
  state.theme.darkTheme;
