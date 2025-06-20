import React from 'react';

import { Svg, G, Path } from '@rpdf/renderer';

const Heart = () => (
  <Svg viewBox="-40 0 150 100">
    <G fill="grey" transform="translate(-36 45.5)">
      <Path d="M 10,30 A 20,20 0,0,1 50,30 A 20,20 0,0,1 90,30 Q 90,60 50,90 Q 10,60 10,30 z" />
    </G>

    <Path
      d="M 10,30 A 20,20 0,0,1 50,30 A 20,20 0,0,1 90,30 Q 90,60 50,90 Q 10,60 10,30 z"
      fill="none"
      stroke="red"
    />
  </Svg>
);

export default Heart;
