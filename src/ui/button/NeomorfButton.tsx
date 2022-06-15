import React, { FC, useCallback, useState }           from 'react'
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import LinearGradient                                 from 'react-native-linear-gradient'

interface INeomorfButton {
  size?: number
  style?: Object
  onPress?: () => void
}

const NeomorfButton: FC<INeomorfButton> = ({ children, size = 12, style, onPress }) => {

  const [isDown, setDown] = useState(false)
  const handlePressIn = useCallback(() => {
    setDown(true)
  }, [setDown])
  const handlePressOut = useCallback(() => {
    setDown(false)
  }, [setDown])

  const gradColors = isDown ? ['#4da7db', '#5bc6ff'] : ['#5bc6ff', '#4da7db']
  const buttonCommonStyle = {
    borderRadius: size,
    shadowRadius: size * 1.5,
  }
  const buttonOuterStyle = {
    shadowOffset: { width: size, height: size },
    marginTop: size,
    marginBottom: size,
  }
  const buttonInnerStyle = {
    shadowOffset: { width: -size, height: -size },
  }
  const buttonFaceStyle = {
    borderRadius: size,
    padding: size,
  }

  return (
    <TouchableWithoutFeedback
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={onPress}
    >
      <View style={[styles.buttonOuter, buttonCommonStyle, buttonOuterStyle]}>
        <View style={[styles.buttonInner, buttonCommonStyle, buttonInnerStyle]}>
          <LinearGradient
            colors={gradColors}
            useAngle={true}
            angle={145}
            angleCenter={{ x: 0.5, y: 0.5 }}
            style={[styles.buttonFace, buttonFaceStyle, style]}
          >
            {children}
          </LinearGradient>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  buttonOuter: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderRadius: 12,
    shadowOffset: { width: 12, height: 12 },
    shadowColor: '#489dcf',
    shadowOpacity: 1.0,
    shadowRadius: 18,
    marginTop: 12,
    marginBottom: 12,
  },
  buttonInner: {
    backgroundColor: '#55b9f3',
    borderRadius: 12,
    shadowOffset: { width: -12, height: -12 },
    shadowColor: '#62d5ff',
    shadowOpacity: 1.0,
    shadowRadius: 18,
  },
  buttonFace: {
    borderRadius: 12,
    padding: 12,
  },
})

export default NeomorfButton


