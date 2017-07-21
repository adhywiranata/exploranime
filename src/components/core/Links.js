import glamorous from 'glamorous';
import { Link as RouterLink } from 'react-router-dom';

export const Link = glamorous(RouterLink)({
  textDecoration: 'none',
});

export const PlainLink = glamorous(RouterLink)({
  textDecoration: 'none',
});
