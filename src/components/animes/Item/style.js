// @flow
import { css } from 'glamor';
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
  justifyContent: 'space-between',
  alignItems: 'center',
  boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2)',
  padding: 0,
  paddingBottom: 10,
  '@media(min-width: 768px)': {
    width: '28%',
  },
  '@media(min-width: 1200px)': {
    width: '18%',
  },
});

export const Score = glamorous.span({
  color: '#D35400',
  fontSize: '1.7rem',
  fontWeight: '700',
});

const coverLoadingAnimation = () => {
  const gradientShift = css.keyframes({
    '0%': { backgroundPosition: '-82% 100%' },
    '100%': { backgroundPosition: '85% 100%' },
  });
  return {
    opacity: 1,
    background: `linear-gradient(
      to left,
      #eee 8%,
      #e5e5e5 18%,
      #eee 33%
    )`,
    height: 230,
    '@media(min-width: 768px)': {
      height: 320,
    },
    '@media(min-width: 1200px)': {
      height: 320,
    },
    width: '200%',
    backgroundSize: '60% 100%',
    backgroundPosition: '-80% 100%',
    animation: `${gradientShift} 800ms infinite ease`,
    animationFillMode: 'forwards',
  };
};

export const ItemCoverLoading = glamorous.div(coverLoadingAnimation);

const textStyle = {
  marginTop: 10,
  borderRadius: 20,
  overflow: 'hidden',
};

export const ItemTitleWrapper = glamorous.div({
  background: '#3a6073',
  width: '70%',
  height: 20,
  ...textStyle,
});

export const ItemScoreWrapper = glamorous.div({
  background: '#D35400',
  width: '50%',
  height: 15,
  ...textStyle,
});

const titleLoadingAnimation = () => {
  const gradientShift = css.keyframes({
    '0%': { backgroundPosition: '-130% 100%' },
    '100%': { backgroundPosition: '40% 100%' },
  });
  return {
    background: `linear-gradient(
      to left,
      #eee 8%,
      #e5e5e5 18%,
      #eee 33%
    )`,
    height: '100%',
    width: '200%',
    opacity: 0.7,
    backgroundSize: '60% 100%',
    backgroundPosition: '-130% 100%',
    animation: `${gradientShift} 800ms infinite ease`,
    animationFillMode: 'forwards',
  };
};

export const ItemTitleLoading = glamorous.div(titleLoadingAnimation);
