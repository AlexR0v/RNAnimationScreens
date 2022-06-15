import React, { FC } from 'react'

interface FontIconProps {
  type: IconType
  name: string
  color?: string
  size?: number
}

export type IconType =
  | 'material'
  | 'material-community'
  | 'simple-line-icon'
  | 'zocial'
  | 'font-awesome'
  | 'octicon'
  | 'ionicon'
  | 'foundation'
  | 'evilicon'
  | 'entypo'
  | 'antdesign'
  | 'font-awesome-5'
  | 'feather'
  | 'fontisto'

const getIconType = (type: IconType): any => {
  switch (type) {
    case 'zocial':
      return require('react-native-vector-icons/Zocial').default
    case 'octicon':
      return require('react-native-vector-icons/Octicons').default
    case 'material':
      return require('react-native-vector-icons/MaterialIcons').default
    case 'material-community':
      return require('react-native-vector-icons/MaterialCommunityIcons')
        .default
    case 'ionicon':
      return require('react-native-vector-icons/Ionicons').default
    case 'foundation':
      return require('react-native-vector-icons/Foundation').default
    case 'evilicon':
      return require('react-native-vector-icons/EvilIcons').default
    case 'entypo':
      return require('react-native-vector-icons/Entypo').default
    case 'font-awesome':
      return require('react-native-vector-icons/FontAwesome').default
    case 'font-awesome-5':
      return require('react-native-vector-icons/FontAwesome5').default
    case 'simple-line-icon':
      return require('react-native-vector-icons/SimpleLineIcons').default
    case 'feather':
      return require('react-native-vector-icons/Feather').default
    case 'antdesign':
      return require('react-native-vector-icons/AntDesign').default
    case 'fontisto':
      return require('react-native-vector-icons/Fontisto').default
    default:
      return require('react-native-vector-icons/MaterialIcons').default
  }
}

const FontIcon: FC<FontIconProps> = ({ type, name, color, size }) => {

  const Icon = getIconType(type)

  return (
    <Icon
      name={name}
      size={size}
      color={color}
    />
  )
}

export default FontIcon
