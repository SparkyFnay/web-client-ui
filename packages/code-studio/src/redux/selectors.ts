import { RootState } from '@deephaven/redux';
import LayoutStorage from '../storage/LayoutStorage';

/**
 * Get the layout storage used by the app
 * @param store The redux store
 * @returns The layout storage instance
 */

// eslint-disable-next-line import/prefer-default-export
export const getLayoutStorage = (store: RootState): LayoutStorage =>
  store.layoutStorage as LayoutStorage;
