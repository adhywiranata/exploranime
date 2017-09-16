// @flow
import React from 'react';

import { H3 } from '../../core/TextHeadings';
import LazyImage from '../../core/LazyImage';
import {
  DetailWrapper,
  DetailUpper,
  DetailSectionWrapper,
  DetailContentWrapper,
  DetailContent,
  DetailCoverImage,
} from './styles';

import CharactersSection from './sections/Characters';
import CharactersVideo from './sections/Video';

type Props = {
  anime: any,
};

export default ({ anime }: Props): React$Element<any> => (
  <div>
    { anime.attributes && (
      <DetailWrapper>

        <DetailSectionWrapper>
          <DetailUpper>
            <DetailCoverImage>
              <LazyImage
                src={anime.attributes.posterImage.small}
                style={{ width: 200, height: 320 }}
              />
            </DetailCoverImage>

            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: 30, paddingTop: 0, boxSizing: 'border-box' }}>
              <H3>Summary</H3>
              <DetailContent>
                {anime.attributes.synopsis}
              </DetailContent>
            </div>
          </DetailUpper>
        </DetailSectionWrapper>

        <CharactersVideo />
        <CharactersSection animeId={anime.id} />

        <DetailSectionWrapper>
          <H3>Related Toys</H3>
          <DetailContentWrapper>
            <div style={{ flex: 1, padding: 3 }}>
              <LazyImage src={'http://images.goodsmile.info/cgm/images/product/20151030/5303/36153/large/fe952fbafbb73eb31e7d1cbe72a67b32.jpg'} width={'100%'} height={'100%'} alt={'img'} />
            </div>
            <div style={{ flex: 1, padding: 3 }}>
              <LazyImage src={'http://images.goodsmile.info/cgm/images/product/20151030/5303/36155/large/72bc2510994236b2922737adb8591f46.jpg'} width={'100%'} height={'100%'} alt={'img'} />
            </div>
            <div style={{ flex: 1, padding: 3 }}>
              <LazyImage src={'http://images.goodsmile.info/cgm/images/product/20160623/5762/39735/large/e71790636a80db3b3f4f948c3e8a5478.jpg'} width={'100%'} height={'100%'} alt={'img'} />
            </div>
          </DetailContentWrapper>
        </DetailSectionWrapper>
      </DetailWrapper>
    ) }
  </div>
);
