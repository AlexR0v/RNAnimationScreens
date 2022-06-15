import { NavScreenRouteProp }      from '@/types'
import { useNavigation as useNav } from '@react-navigation/native'

export const useNavigation = () => useNav<NavScreenRouteProp>()
