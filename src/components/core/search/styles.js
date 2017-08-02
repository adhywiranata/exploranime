import glamorous from 'glamorous';

import { colors, borders, fontSizeScale, zScale } from '../../../config/themeConstants';

export const ModalWrapper = glamorous.div(
  {
    position: 'fixed',
    zIndex: zScale.normal,
    transition: '0.3s',
    width: '100vw',
    height: '100vh',
    backgroundColor: colors.white,
    boxSizing: 'border-box',
    padding: 20,
    paddingTop: 100,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ({ isSearchActive }) => ({
    top: isSearchActive ? 0 : '-100vh',
    opacity: isSearchActive ? 0.96 : 0.1,
  }),
);

export const SearchHeading = glamorous.span({
  textAlign: 'center',
  color: colors.darkBlue,
  fontSize: fontSizeScale.large,
});

export const BigIcon = glamorous.img({
  width: '30%',
  height: 150,
});
