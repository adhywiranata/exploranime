// @flow
import glamorous from 'glamorous';

import { colors, fontSizeScale, boldScale, zScale } from '../../../config/themeConstants';

export const HeaderWrapper = glamorous.div(
  {
    position: 'fixed',
    zIndex: zScale.top,
    width: '100%',
    boxShadow: '0px 2px 6px 1px rgba(0,0,0,0.2)',
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 15,
    paddingBottom: 15,
  },
  ({ isSearchActive }) => ({
    background: isSearchActive ? colors.gray : colors.blueGradient,
  }),
);

const logoStyle = {
  fontSize: fontSizeScale.huge,
  color: colors.white,
};

export const LogoBold = glamorous.span({
  fontWeight: boldScale.bold,
  ...logoStyle,
});

export const LogoReg = glamorous.span({
  fontWeight: boldScale.light,
  ...logoStyle,
});

export const HamburgerIcon = glamorous.img(
  {
    width: 40,
    height: 40,
    transition: '0.1s',
  },
  ({ isSearchActive }) => ({
    transform: isSearchActive ? 'translate(-100px, 0)' : '',
  }),
);

export const SearchIcon = glamorous.img(
  {
    width: 30,
    height: 30,
    transition: '0.2s',
  },
  ({ isNavbarActive, isSearchActive }) => ({
    transform: (isNavbarActive || isSearchActive) ? 'scale(0,0) rotate(-90deg)' : '',
  }),
);

export const CloseSearchIcon = glamorous.img(
  {
    width: 30,
    height: 30,
    transition: '0.2s',
    position: 'absolute',
    right: 10,
    display: 'block !important',
  },
  ({ isSearchActive }) => ({
    transform: isSearchActive ? '' : 'scale(0,0) rotate(-90deg)',
    // display: isSearchActive ? 'block' : 'block',
  }),
);

export const SearchInput = glamorous.input(
  {
    backgroundColor: 'transparent',
    color: colors.white,
    padding: 10,
    border: 0,
    fontSize: fontSizeScale.medium,
    position: 'absolute',
    width: '70vw',
    borderBottom: '1px solid rgba(255,255,255,0.3)',
    outline: 'none',
    transition: 'left 0.2s',
    '&::placeholder': {
      color: colors.white,
      opacity: 0.5,
    },
  },
);
