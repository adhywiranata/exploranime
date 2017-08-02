import glamorous from 'glamorous';

import { colors, borders, fontSizeScale, zScale } from '../../../config/themeConstants';

export const ModalWrapper = glamorous.div(
  {
    position: 'fixed',
    zIndex: zScale.normal,
    transition: '0.2s',
    width: '100vw',
    height: '100vh',
    backgroundColor: colors.white,
    padding: 20,
    paddingTop: 100,
  },
  ({ isSearchActive }) => ({
    top: isSearchActive ? 0 : '100vh',
  }),
);
