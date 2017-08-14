// @flow
import React from 'react';

import { ItemCoverLoading } from '../animes/Item/style';

type Props = {
  src: string,
  style: any,
};

export default class extends React.Component {
  constructor() {
    super();
    this.state = {
      imgFinishedLoading: false,
    };

    this.finishLoadImage = this.finishLoadImage.bind(this);
  }

  componentDidMount() {
    this.img.addEventListener('load', this.finishLoadImage);
  }

  finishLoadImage() {
    if (this.img) {
      this.setState({ imgFinishedLoading: true });
    }
  }

  props: Props;

  render() {
    const { src, style } = this.props;
    const { imgFinishedLoading } = this.state;
    return (
      <div style={{ ...style, width: '100%', position: 'relative', overflow: 'hidden' }}>
        {!imgFinishedLoading && (
          <ItemCoverLoading style={{ height: '100%', position: 'absolute', top: 0, width: '200%' }} />
        )}
        <img
          src={src}
          alt={'img'}
          ref={(img) => { this.img = img; }}
          style={{ width: '100%' }}
        />
      </div>
    );
  }
}
