import glamorous from 'glamorous';

import { colors, borders, fontSizeScale, zScale } from '../../../config/themeConstants';

export const MobileNavOverlay = glamorous.div(
  {
    position: 'fixed',
    width: '100vw',
    height: '100vh',
    zIndex: zScale.top,
    transition: '0.2s',
  },
  ({ isNavbarActive }) => ({
    backgroundColor: isNavbarActive ? colors.shadeDarkest : 'transparent',
  }),
);

export const MobileNavContainer = glamorous.div(
  {
    backgroundColor: colors.white,
    position: 'fixed',
    width: '80vw',
    height: '100vh',
    zIndex: zScale.topMost,
    boxShadow: `3px 1px 10px 1px ${colors.shadeLight}`,
    transition: 'left 0.3s',
  },
  ({ isNavbarActive }) => ({
    left: isNavbarActive ? 0 : '-80vw',
  }),
);

export const MobileNavHeader = glamorous.header({
  background: colors.blueGradient,
  padding: 30,
  boxSizing: 'border-box',
  color: colors.white,
});

export const MobileNavList = glamorous.ul({
  padding: 0,
});

export const MobileNavListItem = glamorous.li({
  padding: '20px 20px',
  fontSize: fontSizeScale.small,
  ...borders.bottom,
});

export const CloseIcon = glamorous.img(
  {
    position: 'fixed',
    right: 12,
    zIndex: 99,
    width: 30,
    height: 30,
    transition: '0.2s',
    top: 20,
  },
  ({ isNavbarActive }) => ({
    transform: isNavbarActive ? '' : 'scale(0.1, 0.1)',
  }),
);
