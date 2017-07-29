// @flow
import glamorous from 'glamorous';

import { colors, boldScale } from '../../config/themeConstants';

export const H1 = glamorous.h1({
  fontFamily: 'Open Sans',
  fontWeight: boldScale.light,
  color: colors.gray,
});

export const H2 = glamorous.h2({
  fontFamily: 'Open Sans',
  fontWeight: boldScale.regular,
});

export const H3 = glamorous.h3({
  fontFamily: 'Open Sans',
  fontWeight: boldScale.bold,
});
