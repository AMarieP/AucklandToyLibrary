import * as React from "react"
import Svg, { Path, Circle, Defs, LinearGradient, Stop } from "react-native-svg"

const ToyPileInfographic = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path
      fill="#E9795B"
      fillRule="evenodd"
      d="M76.894 105.255H193.39V168.2h-17.798v-.173c0-23.781-18.037-43.059-40.287-43.059-22.251 0-40.288 19.278-40.288 43.059v.173H76.894v-62.945Z"
      clipRule="evenodd"
    />
    <Path
      fill="#A0D3CB"
      fillRule="evenodd"
      d="M92.715 168.609h84.134l.001-.182c0-25.107-18.835-45.46-42.068-45.46-23.233 0-42.068 20.353-42.068 45.46v.182Z"
      clipRule="evenodd"
    />
    <Path
      fill="#DFCD3D"
      d="m22.063 162.383 54.831-.22-44.126-57.893-10.705 58.113Z"
    />
    <Path fill="#F1DD40" d="m160.67 0-37.034 48.957h74.068L160.67 0Z" />
    <Path fill="#E89F55" d="M175.412 48.9h-51.776v55.95h51.776z" />
    <Path fill="#A59BCE" d="M108.535 125.844H56.759v55.951h51.776z" />
    <Circle cx={245.704} cy={118.165} r={69} fill="#A5DAD2" />
    <Path
      fill="#E9795B"
      fillRule="evenodd"
      d="M185.498 151.898c-5.6-9.974-8.794-21.48-8.794-33.733 0-27.783 16.42-51.731 40.086-62.668l.428-.002c28.668 0 51.908 24.09 51.908 53.807 0 29.717-23.24 53.808-51.908 53.808-11.946 0-22.948-4.183-31.72-11.212Z"
      clipRule="evenodd"
    />
    <Path
      fill="#F1DD40"
      fillRule="evenodd"
      d="m188.181 79.986 8.485.232 9.308-18.652a61.445 61.445 0 0 1 11.072-6.07l7.046 28.1 34.905 7.712-29.61 23.021 3.883 40.215-28.036-24.598-24.161 12.741a71.049 71.049 0 0 1-3.103-11.911l7.042-21.912-6.029-7.449c1.891-7.776 5.039-15.007 9.198-21.43Z"
      clipRule="evenodd"
    />
    <Path
      fill="url(#a)"
      fillOpacity={0.6}
      fillRule="evenodd"
      d="M76.831 105.255h101.015a68.56 68.56 0 0 1 8.883-23.03c.449-.757.912-1.504 1.388-2.24l.039.002a69.392 69.392 0 0 1 17.618-18.146l.137-.275a61.843 61.843 0 0 1 7.634-4.498 68.652 68.652 0 0 1 3.182-1.571c8.794-4.065 18.589-6.332 28.914-6.332 38.107 0 69 30.892 69 69 0 38.107-30.893 69-69 69-20.918 0-39.661-9.308-52.315-24.007v5.042h-16.54v.053l.001.174v.098l-.001.084h-68.314v13.185H56.696v-19.55L22 162.383l10.705-58.113 23.991 31.477v-9.904h20.135v-20.588ZM160.607 0l-36.99 48.9h-.044v55.95h51.776V48.957h22.292L160.607 0Z"
      clipRule="evenodd"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={102.5}
        x2={102.5}
        y1={85.5}
        y2={-77.5}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FFF9DC" />
        <Stop offset={0} stopColor="#6D9122" stopOpacity={0} />
      </LinearGradient>
    </Defs>
  </Svg>
)
export default ToyPileInfographic
