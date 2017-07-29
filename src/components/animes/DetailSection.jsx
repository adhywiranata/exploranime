// @flow
import React from 'react';

import { H2, H3 } from '../core/TextHeadings';

export default (): React$Element<any> => (
  <div style={{ padding: 0, display: 'flex', flexDirection: 'column' }}>
    <div style={{
      background: 'url("https://media.kitsu.io/anime/cover_images/10740/original.jpg?1445804501")',
      height: 100,
      width: '100%',
      padding: '50px 0',
      backgroundAttachment: 'fixed',
      backgroundSize: 'contain',
      position: 'relative',
    }}>
      <div style={{
        background: 'rgba(0,0,0,0.5)',
        width: '100%',
        height: '100%',
        position: 'absolute',
        padding: 30,
        boxSizing: 'border-box',
        top: 0,
      }}>
        <H2 style={{ color: 'white', position: 'absolute', bottom: 0 }}>
          Ano hi Mita Hana No Namae Wo Bokutachi Wa Shiranai
        </H2>
      </div>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', padding: 20, boxSizing: 'border-box', alignItems: 'center' }}>
      <div style={{ flex: 1, textAlign: 'center' }}>
        <img src={'https://media.kitsu.io/anime/poster_images/10740/small.jpg?1441243505'} width={'50%'} />
      </div>
      <div style={{ flex: 1, padding: '0px 20px' }}>
        <H3>Summary</H3>
        <p style={{ color: '#666666', fontSize: '0.8rem', textAlign: 'justify' }}>
          {`The seemingly ordinary and unimpressive Saitama has a rather unique hobby: being a hero. In order to pursue his childhood dream, he trained relentlessly for three years—and lost all of his hair in the process. Now, Saitama is incredibly powerful, so much so that no enemy is able to defeat him in battle. In fact, all it takes to defeat evildoers with just one punch has led to an unexpected problem—he is no longer able to enjoy the thrill of battling and has become quite bored.\r\n\r\nThis all changes with the arrival of Genos, a 19-year-old cyborg, who wishes to be Saitama's disciple after seeing what he is capable of. Genos proposes that the two join the Hero Association in order to become certified heroes that will be recognized for their positive contributions to society, and Saitama, shocked that no one knows who he is, quickly agrees. And thus begins the story of One Punch Man, an action-comedy that follows an eccentric individual who longs to fight strong enemies that can hopefully give him the excitement he once felt and just maybe, he'll become popular in the process.\r\n\r\n(Source: MAL Rewrite)`}
        </p>
      </div>
    </div>
  </div>
);
