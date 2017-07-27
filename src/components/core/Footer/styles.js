import glamorous from 'glamorous';

export const Footer = glamorous.footer({
  position: 'absolute',
  bottom: 0,
  width: '100%',
  backgroundColor: '#353535',
  textAlign: 'center',
  padding: 20,
  marginTop: 20,
  boxSizing: 'border-box',
});

export const FooterText = glamorous.span({
  color: '#FFFFFF',
  fontSize: '0.8rem',
});
