import  React  from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from 'react-navigation-stack';


import OnboardingScreen from './screens/OnboardingScreen';
import LoginScreen from './screens/LoginScreen';

const AppStack = createStackNavigator()

export default function App() {

  return (
      <NavigationContainer>
        <AppStack.Navigator
          headerMode="none"
        >

          

          <AppStack.Screen name='Onboarding' components={OnboardingScreen}/>
          <AppStack.Screen name='Login' components={LoginScreen}/>
          
        </AppStack.Navigator>
      </NavigationContainer>
  );
}


