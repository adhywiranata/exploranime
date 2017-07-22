import glamorous from 'glamorous';

export const ItemWrapper = glamorous.div({
  margin: '5px 1%',
  width: '48%',
  height: 'auto',
  borderRadius: 3,
  overflow: 'hidden',
  backgroundColor: '#FFFFFF',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2)',
  paddingBottom: 10,
  '@media(min-width: 768px)': {
    width: '22%',
  },
  '@media(min-width: 1200px)': {
    width: '18%',
  },
});

export const ItemCover = glamorous.img({
  width: '100%',
});
