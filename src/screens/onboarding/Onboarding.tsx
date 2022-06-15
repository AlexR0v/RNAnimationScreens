import { onboarding1, onboarding2, onboarding3 }                              from '@/constants/images'
import { useNavigation }                                                      from '@/hooks'
import { FontIcon, NeomorfButton, theme }                                     from '@/ui'
import { MotiView }                                                           from 'moti'
import React, { FC }                                                          from 'react'
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import { Easing }                                                             from 'react-native-reanimated'

interface IOnBoarding {

}

const { width, height } = Dimensions.get('window')

const onBoardings = [
  {
    title: 'Let\'s Travelling',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut',
    img: onboarding1
  },
  {
    title: 'Navigation',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut',
    img: onboarding2
  },
  {
    title: 'Destination',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut',
    img: onboarding3
  }
]

const OnBoarding: FC<IOnBoarding> = () => {

  const { navigate } = useNavigation()

  const handlePressIcon = () => {
    navigate('Gallery')
  }

  const handlePressButton1 = () => {
    navigate('Loading')
  }
  const handlePressButton2 = () => {
    navigate('List')
  }
  const handlePressButton3 = () => {
    navigate('Slider')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={[styles.dot, styles.center]}
      >
        {[...Array(3).keys()].map(i => {
          return (
            <MotiView
              key={i}
              from={{ opacity: .5, scale: 1 }}
              animate={{ opacity: 0, scale: 4 }}
              transition={{
                type: 'timing',
                duration: 2000,
                easing: Easing.out(Easing.ease),
                delay: i * 400,
                repeatReverse: false,
                loop: true
              }}
              style={[StyleSheet.absoluteFillObject, styles.dot]}
            />
          )
        })}
        <TouchableOpacity onPress={handlePressIcon}>
          <FontIcon
            type='entypo'
            name='folder-images'
            size={32}
            color={theme.COLORS.white}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.buttonBox}>
        <NeomorfButton
          size={8}
          onPress={handlePressButton1}
        >
          <Text style={{ color: 'white' }}>Loading</Text>
        </NeomorfButton>
        <NeomorfButton
          size={8}
          onPress={handlePressButton2}
        >
          <Text style={{ color: 'white' }}>List</Text>
        </NeomorfButton>
        <NeomorfButton
          size={8}
          onPress={handlePressButton3}
        >
          <Text style={{ color: 'white' }}>Slider</Text>
        </NeomorfButton>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#55b9f3',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer'
  },
  dot: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: theme.COLORS.blue2,
  },
  buttonBox: {
    ...StyleSheet.absoluteFillObject,
    width,
    top: height - 200,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
})

export default OnBoarding


