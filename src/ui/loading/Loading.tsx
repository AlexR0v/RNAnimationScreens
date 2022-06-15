import { MotiView }  from 'moti'
import React, { FC } from 'react'
import { View }      from 'react-native'

interface ILoading {
  size: number
}

const Loading: FC<ILoading> = ({ size = 100 }) => {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#010100' }}>
      <MotiView
        from={{
          width: size,
          height: size,
          borderRadius: size / 2,
          borderWidth: 0,
          shadowOpacity: .5
        }}
        animate={{
          width: size + 20,
          height: size + 20,
          borderRadius: (size + 20) / 2,
          borderWidth: size / 10,
          shadowOpacity: 1
        }}
        transition={{
          type: 'timing',
          duration: 1000,
          loop: true,
        }}
        style={{
          width: size,
          height: size,
          borderRadius: size / 2,
          borderWidth: size / 10,
          borderColor: '#ffffff',
          shadowColor: '#ffffff',
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 1,
          shadowRadius: 10,
        }}
      />
    </View>
  )
}

export default Loading


