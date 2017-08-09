import glamorous from 'glamorous';

import { colors, fontSizeScale, zScale } from '../../../config/themeConstants';

export const ModalWrapper = glamorous.div(
  {
    position: 'fixed',
    zIndex: zScale.normal,
    transition: 'opacity 1s',
    width: '100vw',
    height: '100vh',
    backgroundColor: colors.white,
    boxSizing: 'border-box',
    paddingTop: 70,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ({ isSearchActive }) => ({
    top: isSearchActive ? 0 : '-100vh',
    opacity: isSearchActive ? 1 : 0.1,
  }),
);

export const SearchHeading = glamorous.span({
  textAlign: 'center',
  color: colors.darkBlue,
  fontSize: fontSizeScale.large,
});

export const BigIcon = glamorous.img(
  {
    width: '30%',
    height: 150,
    transition: '0.5s',
    transform: 'rotate(-90deg) scale(0,0)',
    display: 'block !important',
  },
  ({ isSearchActive }) => ({
    transform: isSearchActive ? '' : 'rotate(-90deg) scale(0,0)',
    // display: isSearchActive ? 'block' : 'none',
  }),
);

export const SearchResultHeading = glamorous.div({
  background: colors.blue,
  width: '100%',
  color: colors.white,
  padding: 10,
  boxSizing: 'border-box',
});

export const ResultsList = glamorous.div({
  overflow: 'scroll',
  height: 'auto',
  width: '100%',
  backgroundColor: colors.white,
});
