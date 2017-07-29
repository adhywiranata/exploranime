// @flow
import glamorous from 'glamorous';

import { colors, fontSizeScale, boldScale, zScale } from '../../../config/themeConstants';

export const HeaderWrapper = glamorous.div({
  background: colors.blueGradient,
  position: 'fixed',
  zIndex: zScale.top,
  width: '100%',
  boxShadow: '0px 2px 6px 1px rgba(0,0,0,0.2)',
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '15px 10px',
});

export const LogoBold = glamorous.span({
  fontSize: fontSizeScale.huge,
  fontWeight: boldScale.bold,
  color: colors.white,
});

export const LogoReg = glamorous.span({
  fontSize: fontSizeScale.huge,
  fontWeight: boldScale.light,
  color: colors.white,
});
