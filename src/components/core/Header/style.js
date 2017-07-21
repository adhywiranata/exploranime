import glamorous from 'glamorous';

export const HeaderWrapper = glamorous.div({
  background: '#3a7bd5',  /* fallback for old browsers */
  background: '-webkit-linear-gradient(to right, #3a6073, #3a7bd5)',  /* Chrome 10-25, Safari 5.1-6 */
  background: 'linear-gradient(to right, #3a6073, #3a7bd5)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  position: 'absolute',
  width: '100%',
  boxShadow: '1px 1px 1px 1px rgba(0,0,0,0.1)',
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'space-between',
  padding: 10,
});

export const LogoBold = glamorous.span({
  fontSize: '1.5rem',
  fontWeight: 700,
  color: '#FFFFFF',
});

export const LogoReg = glamorous.span({
  fontSize: '1.5rem',
  fontWeight: 300,
  color: '#FFFFFF',
});
