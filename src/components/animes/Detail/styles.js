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

export const DetailContent = glamorous.div({
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

export const LoadingText = glamorous.div({
  background: '#e5e5e5',
  width: '100%',
  height: '1rem',
  borderRadius: 20,
  margin: '10px 0',
});

export const CharacterWrapper = glamorous.div({
  flexDirection: 'row',
  display: 'flex',
});

export const CharacterAvatar = glamorous.div({
  flex: 1,
  paddingTop: 10,
  paddingRight: 5,
});

export const CharacterDescription = glamorous.div({
  flex: 3,
  padding: 10,
  borderLeft: '1px solid rgba(0,0,0,0.05)',
  height: 100,
  overflow: 'hidden',
  position: 'relative',
});
