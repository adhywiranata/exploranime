import glamorous from 'glamorous';

export const HeaderWrapper = glamorous.div({
  // background: '#3a7bd5',  /* fallback for old browsers */
  // background: '-webkit-linear-gradient(to right, #3a6073, #3a7bd5)',
  background: 'linear-gradient(to right, #3a6073, #3a7bd5)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  position: 'fixed',
  zIndex: 1,
  width: '100%',
  boxShadow: '0px 2px 6px 1px rgba(0,0,0,0.2)',
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '15px 10px',
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
