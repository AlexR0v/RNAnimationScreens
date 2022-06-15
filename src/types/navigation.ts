import { NavigationProp } from '@react-navigation/native'

export type RootStackParamList = {
  OnBoarding: undefined
  Gallery: undefined
  Loading: undefined
  List: undefined
  Slider: undefined
}

export type NavScreenRouteProp = NavigationProp<RootStackParamList, 'OnBoarding' | 'Gallery' | 'Loading' | 'List' | 'Slider'>
