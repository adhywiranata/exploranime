// @flow
import glamorous from 'glamorous';
import { Link as RouterLink } from 'react-router-dom';

export const Link = glamorous(RouterLink)({
  textDecoration: 'none',
  color: '#3a7bd5',
});

export const PlainLink = glamorous(RouterLink)({
  textDecoration: 'none',
});
