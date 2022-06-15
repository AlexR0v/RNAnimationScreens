import { AnimatedList, Gallery, OnBoarding, Slider } from '@/screens'
import { RootStackParamList }                        from '@/types'
import { Loading }                                   from '@/ui'
import { NavigationContainer }                       from '@react-navigation/native'
import { createNativeStackNavigator }                from '@react-navigation/native-stack'
import React                                         from 'react'

const Stack = createNativeStackNavigator<RootStackParamList>()

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='OnBoarding'
          component={OnBoarding}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Gallery'
          component={Gallery}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Loading'
          component={Loading}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='List'
          component={AnimatedList}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Slider'
          component={Slider}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
