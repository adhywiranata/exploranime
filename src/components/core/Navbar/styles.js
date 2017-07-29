import glamorous from 'glamorous';

export const MobileNavOverlay = glamorous.div({
  backgroundColor: 'rgba(0,0,0,0.7)',
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  zIndex: 1,
});

export const MobileNavContainer = glamorous.div({
  backgroundColor: '#FFFFFF',
  position: 'fixed',
  width: '80vw',
  height: '100vh',
  zIndex: 3,
  boxShadow: '3px 1px 10px 1px rgba(0,0,0,0.1)',
});

export const MobileNavHeader = glamorous.header({
  background: 'linear-gradient(to right, #3a6073, #3a7bd5)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  padding: 30,
  boxSizing: 'border-box',
  color: 'white',
});

export const MobileNavList = glamorous.ul({
  padding: 0,
});

export const MobileNavListItem = glamorous.li({
  padding: '20px 20px',
  borderBottom: '1px solid rgba(0,0,0,0.05)',
  fontSize: '0.8rem',
});