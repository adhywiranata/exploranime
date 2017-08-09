// @flow
import React from 'react';

import { H1 } from '../TextHeadings';

type Props = { label: string };

export default ({ label }: Props) => {
  const words = label.split(' ');
  const strongLabel = words[0];
  const restLabel = words.slice(1).join(' ');
  return (
    <H1 style={{ borderBottom: '1px solid rgba(0,0,0,0.03)', marginTop: 30 }}>
      <strong>{strongLabel}</strong>
      <span>{restLabel}</span>
    </H1>
  );
};
