export const colors = {
  blueGradient: 'linear-gradient(to right, #3A6073, #3A7BD5)',
  white: '#FFFFFF',
  blue: '#3A7BD5',
  darkBlue: '#3A6073',
  shadeLight: 'rgba(0,0,0,0.05)',
  shadeNormal: 'rgba(0,0,0,0.1)',
  shadeDark: 'rgba(0,0,0,0.3)',
  shadeDarker: 'rgba(0,0,0,0.5)',
  shadeDarkest: 'rgba(0,0,0,0.8)',
  gray: '#666666',
  black: '#000000',
};

export const borders = {
  all: {
    border: `1px solid ${colors.shadeNormal}`,
  },
  top: {
    borderTop: `1px solid ${colors.shadeNormal}`,
  },
  bottom: {
    borderBottom: `1px solid ${colors.shadeNormal}`,
  },
  left: {
    borderLeft: `1px solid ${colors.shadeNormal}`,
  },
  right: {
    borderRight: `1px solid ${colors.shadeNormal}`,
  },
  topBottom: {
    borderTop: `1px solid ${colors.shadeNormal}`,
    borderBottom: `1px solid ${colors.shadeNormal}`,
  },
  leftRight: {
    borderLeft: `1px solid ${colors.shadeNormal}`,
    borderRight: `1px solid ${colors.shadeNormal}`,
  },
};

export const fontSizeScale = {
  huge: '2rem',
  large: '1rem',
  medium: '1rem',
  small: '0.8rem',
  tiny: '0.6rem',
};

export const boldScale = {
  light: 200,
  regular: 400,
  bold: 600,
};

export const borderRadiusScale = {
  rounded: 10,
  moreRounded: 50,
  circle: '50%',
};

export const zScale = {
  topMost: 4,
  topMore: 3,
  top: 2,
  normal: 1,
  back: 0,
};
