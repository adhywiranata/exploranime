import glamorous from 'glamorous';

export const DetailWrapper = glamorous.div({
  display: 'flex',
  flexDirection: 'column',
  padding: 20,
  boxSizing: 'border-box',
  alignItems: 'center',
});

export const DetailSectionWrapper = glamorous.div({
  padding: '0px 20px',
  width: '100%',
});

export const DetailContentWrapper = glamorous.div({
  display: 'flex',
  flexDirection: 'row',
});

export const DetailContent = glamorous.p({
  color: '#666666',
  fontSize: '0.8rem',
  textAlign: 'justify',
});

export const ExpandContentText = glamorous.span({
  position: 'absolute',
  bottom: 0,
  fontWeight: 'bold',
  backgroundColor: '#f5f5f5',
  color: '#3A6073',
  width: '100%',
});
