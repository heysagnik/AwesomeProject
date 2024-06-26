
import React from 'react'
import Home from './screens/Home'
import Details from './screens/Details'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
          <Stack.Screen name="Details" component={Details} options={{
            headerTitle: 'Satisfy your Cravings',
            headerTitleStyle: {
              fontSize: 20,
              fontFamily:'Urbanist-Bold',
            },
          headerShadowVisible:false,
          
          }} />
        </Stack.Navigator>
     
    </NavigationContainer>
    
  )
}

export default App
