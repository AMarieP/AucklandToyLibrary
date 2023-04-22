import { Svg, Path, Rect } from 'react-native-svg'
import React from 'react'

const BrickStack = ({width, height}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path fill-rule="evenodd" clip-rule="evenodd" d="M2.54772 15.5237H14.0117V21.718H12.2603C12.2603 21.7123 12.2603 21.7066 12.2603 21.701C12.2603 19.3608 10.4853 17.4637 8.29568 17.4637C6.10607 17.4637 4.33105 19.3608 4.33105 21.701C4.33105 21.7066 4.33106 21.7123 4.33108 21.718H2.54772V15.5237Z" fill="#B1CC9F"/>
<Path fill-rule="evenodd" clip-rule="evenodd" d="M2.19345e-05 4.49165H8.27951C8.27953 4.48563 8.27954 4.47962 8.27954 4.4736C8.27954 2.0029 6.4261 0 4.13976 0C1.85343 0 -1.14441e-05 2.0029 -1.14441e-05 4.4736C-1.14441e-05 4.47962 0 4.48563 2.19345e-05 4.49165Z" fill="#A5DAD2"/>
<Path d="M16.1878 21.7778L21.5836 21.7561L17.2412 16.059L16.1878 21.7778Z" fill="#DFCD3D"/>
<Path d="M15.8868 18.2768L12.2424 23.0945H19.5312L15.8868 18.2768Z" fill="#F1DD40"/>
<Rect width="5.09511" height="5.50597" transform="matrix(-1 0 0 1 8.7041 10.0177)" fill="#E89F55"/>
<Rect width="5.09511" height="5.50597" transform="matrix(-1 0 0 1 6.15674 4.51181)" fill="#A59BCE"/>
</Svg>

  )
}

export default BrickStack

