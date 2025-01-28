import { MenuState } from '../src/reducers/menuState.types';
import { menuStateReducer } from '../src/reducers/menuStateReducer';
import { describe, it, expect } from '@jest/globals';

describe('menuStateReducer', () => {
  it('should return the initial state', () => {
    const initialState: MenuState = {
      subMenuItemsMap: {},
      menuItemsMap: {},
      menuItemsListToLocaleMap: {},
      subMenuItemsColumnsMap: {},
    }
    const state = menuStateReducer(initialState, { type: 'unknown', payload: {} });
    expect(state).toEqual(initialState)
  });
})