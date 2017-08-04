import React from 'react';

import { H3 } from '../../core/TextHeadings';
import LazyImage from '../../core/LazyImage';

export default ({ anime }): React$Element<any> => (
  <div>
    { anime.attributes && (
      <div style={{ display: 'flex', flexDirection: 'column', padding: 20, boxSizing: 'border-box', alignItems: 'center' }}>

        <div style={{ textAlign: 'center', width: '50%' }}>
          <LazyImage src={anime.attributes.posterImage.small} style={{ height: 220 }} />
        </div>

        <div style={{ padding: '0px 20px', width: '100%' }}>
          <H3>Summary</H3>
          <p style={{ color: '#666666', fontSize: '0.8rem', textAlign: 'justify' }}>
            {anime.attributes.synopsis}
          </p>
        </div>


        <div style={{ padding: '0px 20px', width: '100%' }}>
          <H3>Videos</H3>
          <p style={{ color: '#666666', fontSize: '0.8rem', textAlign: 'justify' }}>
            You can only watch this trailer online
          </p>
        </div>

        <div style={{ padding: '0px 20px', width: '100%' }}>
          <H3>Characters</H3>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ flex: 1, paddingTop: 10, paddingRight: 5 }}>
              <LazyImage src={'https://media.kitsu.io/characters/images/57048/original.jpg?1483096805'} width={'100%'} alt={'img'} />
            </div>
            <div style={{ flex: 3, padding: 10, borderLeft: '1px solid rgba(0,0,0,0.1)' }}>
              <span>Saitama</span>
              <p style={{ fontSize: '0.7rem', color: '#666' }}>
                Race: Human<br/>Age: 25<br/>Height: 175 cm (5)<br/>Weight: 70 kg (154 lbs)<br/>Location: Z-City<br/>Abilities: Superhuman physical powers<br/>Occupation: Superhero<br/>Level: <br/><span>C-Class (Rank 388 - 342 - 5 - 1)<br/>B-Class (Rank 101 - 63 -33 - 7)<br/>A-Class (Rank 39)</span><br/>Affiliation: Hero Association<br/>Partner(s): Genos<br/><br/>Saitama is the most powerful hero alive. Having apparently trained himself to superhuman condition, Saitama faces an existential crisis as he is now too powerful to gain any thrill from his heroic deeds.<br/><br/>He is registered with the Heroes Association as a C-Class Superhero and is tasked to defend Z-City against Mysterious Beings.<br/><br/>Saitama is usually deliberately drawn in a simpler style than other characters, with a very rounded head and only a simple mouth and eyes. When drawn in a more 'action-oriented' style with more detail, Saitama is revealed to have sharp features, dangerous looking eyes, and chiseled musculature. His costume is a plain yellow jumpsuit with a short zipper at the collar and a belt. The costume is finished out by an ensemble of red boots and gloves, and a white cape.<br/><br/>For a superhero, Saitama is rather laid back. Because even the mightiest foes pose no challenge to him, he doesn't take his hero work very seriously. In spite of this, he is constantly searching for an opponent that can challenge him, since his superhero work is beginning to bore him because it's too easy. The combination of his attitude, unstoppable strength, and distinctively simple and 'unimpressive' appearance often cause his battles to become anticlimactic. Saitama will usually allow his opponents to rant about their motives and power up into their strongest forms before suddenly and nonchalantly obliterating them with one punch.<br/><br/>(Source: One Punch-Man Wikia)
              </p>
            </div>
          </div>
        </div>

        <div style={{ padding: '0px 20px', width: '100%' }}>
          <H3>Related Toys</H3>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ flex: 1, padding: 3 }}>
              <LazyImage src={'http://images.goodsmile.info/cgm/images/product/20151030/5303/36153/large/fe952fbafbb73eb31e7d1cbe72a67b32.jpg'} width={'100%'} height={'100%'} alt={'img'} />
            </div>
            <div style={{ flex: 1, padding: 3 }}>
              <LazyImage src={'http://images.goodsmile.info/cgm/images/product/20151030/5303/36155/large/72bc2510994236b2922737adb8591f46.jpg'} width={'100%'} height={'100%'} alt={'img'} />
            </div>
            <div style={{ flex: 1, padding: 3 }}>
              <LazyImage src={'http://images.goodsmile.info/cgm/images/product/20160623/5762/39735/large/e71790636a80db3b3f4f948c3e8a5478.jpg'} width={'100%'} height={'100%'} alt={'img'} />
            </div>
          </div>
        </div>
      </div>
    ) }
  </div>
);
