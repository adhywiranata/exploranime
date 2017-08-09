// @flow
import glamorous from 'glamorous';
import { Link as RouterLink } from 'react-router-dom';

import { colors } from '../../config/themeConstants';

export const Link = glamorous(RouterLink)({
  textDecoration: 'none',
  color: colors.darkBlue,
});

export const PlainLink = glamorous(RouterLink)({
  textDecoration: 'none',
});
