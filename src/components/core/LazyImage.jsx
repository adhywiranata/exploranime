import React from 'react';

import { ItemCoverLoading } from '../animes/Item/style';

export default class extends React.Component {
  constructor() {
    super();
    this.state = {
      imgFinishedLoading: false,
    };
  }

  componentDidMount() {
    this.img.onload = () => {
      this.setState({ imgFinishedLoading: true });
    };
  }

  render() {
    const { src } = this.props;
    const { imgFinishedLoading } = this.state;
    return (
      <div style={{ width: '100%', position: 'relative', overflow: 'hidden' }}>
        {!imgFinishedLoading && (
          <ItemCoverLoading style={{ height: 400, position: 'absolute', top: 0, width: '200%' }} />
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
