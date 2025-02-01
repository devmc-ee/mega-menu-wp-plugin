import { EndpointName } from '../src/app.types';
import { MenuMetaActionType, MenuMetaState } from '../src/reducers/menuMeta.type';
import { menuMetaReducer } from '../src/reducers/menuMetaReducer';
import { describe, it, expect } from '@jest/globals';

describe('menuMetaStateReducer', () => {
  const initialState: MenuMetaState = {
    languages: [],
    defaultLanguage: 'en',
    activeLanguageTab: 'en',
    endpoints: {
      [EndpointName.SAVE]: '',
    },
    customNonce: "",
    postID: 0
  }

  it('should return the initial state', () => {
    // @ts-ignore
    const state = menuMetaReducer(initialState, { type: 'unknown', payload: {} });
    expect(state).toEqual(initialState)
  });

  it('should set active language tab', () => {
    const state = menuMetaReducer(initialState, {
      type: MenuMetaActionType.ACTIVE_LANGUAGE_TAB_SET,
      payload: 'fr'
    });

    expect(state.activeLanguageTab).toEqual('fr');
  });
})