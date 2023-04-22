import * as React from "react"
import Svg, { G, Rect, Path, Ellipse, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const BrowsingCard = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <G filter="url(#a)">
      <Rect
        width={414.356}
        height={561.683}
        x={41.435}
        y={44.505}
        fill="#A2A18F"
        rx={7}
      />
      <G filter="url(#b)">
        <Path
          fill="#A5DAD2"
          fillRule="evenodd"
          d="M477.823 241.528 335.632 201.23l.087-.309c12.025-42.431 53.605-67.807 92.87-56.679 39.265 11.128 61.347 54.546 49.322 96.978l-.088.308Z"
          clipRule="evenodd"
        />
      </G>
      <G filter="url(#c)">
        <Path
          fill="#A5DAD2"
          fillRule="evenodd"
          d="m0 530.103 105.528-103.469.226.228c30.876 31.491 32.283 80.182 3.142 108.755-29.141 28.572-77.795 26.206-108.671-5.285L0 530.103Z"
          clipRule="evenodd"
        />
      </G>
      <G filter="url(#d)">
        <Path
          fill="#E89F55"
          d="m133.515 90.011 86.396-27.09 29.387 93.718-86.397 27.09z"
        />
      </G>
      <G filter="url(#e)">
        <Path
          fill="#F1DD40"
          d="m309.683 22.417 90.703 58.313-122.138 44.835 31.435-103.148Z"
        />
      </G>
      <G filter="url(#f)">
        <Path
          fill="#E9795B"
          fillRule="evenodd"
          d="m468.067 426.633-179.552 98.166 53.04 97.015 27.432-14.998a22.604 22.604 0 0 1-.146-.266c-20.039-36.652-8.483-81.564 25.811-100.314 34.295-18.749 78.34-4.236 98.379 32.416l.145.267 27.931-15.27-53.04-97.016Z"
          clipRule="evenodd"
        />
      </G>
      <G filter="url(#g)">
        <Path
          fill="#F1DD40"
          d="m205.326 528.853 90.704 58.312L173.892 632l31.434-103.147Z"
        />
      </G>
      <G filter="url(#h)">
        <Ellipse
          cx={249.381}
          cy={337.623}
          fill="#FFF9DC"
          rx={187.995}
          ry={190.297}
        />
      </G>
    </G>
    <Defs></Defs>
  </Svg>
)
export default BrowsingCard
