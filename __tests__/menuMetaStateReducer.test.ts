import { EndpointName } from '../src/app.types';
import { MenuMetaState } from '../src/reducers/menuMeta.type';
import { menuMetaReducer } from '../src/reducers/menuMetaReducer';
import { describe, it, expect } from '@jest/globals';

describe('menuMetaStateReducer', () => {
  it('should return the initial state', () => {
    const initialState: MenuMetaState = {
      languages: [],
      defaultLanguage: 'en',
      endpoints: {
        [EndpointName.SAVE]: '',
      },
      customNonce: "",
      postID: 0
    }

    const state = menuMetaReducer(initialState, { type: 'unknown', payload: {} });
    expect(state).toEqual(initialState)
  });
})