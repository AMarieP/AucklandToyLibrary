import { Svg, Path, Rect, Circle } from 'react-native-svg'
import React from 'react'

const BackgroundBrickStack = ({width, height}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 39 38" fill="none" xmlns="http://www.w3.org/2000/Svg">
      <Circle cx="19.1501" cy="19" r="19" fill="#FFF9DC"/>
      <Path fill-rule="evenodd" clip-rule="evenodd" d="M13.5563 22.2106H25.0203V28.4048H23.2688C23.2688 28.3991 23.2689 28.3935 23.2689 28.3878C23.2689 26.0477 21.4938 24.1506 19.3042 24.1506C17.1146 24.1506 15.3396 26.0477 15.3396 28.3878C15.3396 28.3935 15.3396 28.3991 15.3396 28.4048H13.5563V22.2106Z" fill="#B1CC9F"/>
      <Path fill-rule="evenodd" clip-rule="evenodd" d="M11.0086 11.1785H19.2881C19.2881 11.1725 19.2881 11.1665 19.2881 11.1604C19.2881 8.68974 17.4346 6.68684 15.1483 6.68684C12.862 6.68684 11.0085 8.68974 11.0085 11.1604C11.0085 11.1665 11.0085 11.1725 11.0086 11.1785Z" fill="#A5DAD2"/>
      <Path d="M27.1963 28.4646L32.5921 28.443L28.2498 22.7459L27.1963 28.4646Z" fill="#DFCD3D"/>
      <Path d="M26.8954 24.9636L23.251 29.7813H30.5398L26.8954 24.9636Z" fill="#F1DD40"/>
      <Rect width="5.09511" height="5.50597" transform="matrix(-1 0 0 1 19.7126 16.7046)" fill="#E89F55"/>
      <Rect width="5.09511" height="5.50597" transform="matrix(-1 0 0 1 17.1653 11.1987)" fill="#A59BCE"/>
    </Svg>

  )
}

export default BackgroundBrickStack