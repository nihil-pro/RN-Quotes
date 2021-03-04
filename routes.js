import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ABOUT_SCREEN_LABEL, QUOTES_SCREEN_LABEL } from './constants'
import { About } from './src/screens/about/About'
import { QuotesContainer } from './src/screens/quotes/QuotesContainer'

const QuotesStack = createStackNavigator()
function QuotesStackScreen() {
  return (
    <QuotesStack.Navigator>
      <QuotesStack.Screen name={QUOTES_SCREEN_LABEL} component={QuotesContainer} />
    </QuotesStack.Navigator>
  )
}

const AboutStack = createStackNavigator()
function AboutStackScreen() {
  return (
    <AboutStack.Navigator>
      <AboutStack.Screen name={ABOUT_SCREEN_LABEL} component={About} />
    </AboutStack.Navigator>
  )
}

const Tab = createBottomTabNavigator()
export const useRoutes = () => (
  <NavigationContainer initialRouteName={QuotesContainer}>
    <Tab.Navigator tabBarOptions={tabOptions} initialRouteName={ABOUT_SCREEN_LABEL}>
      <Tab.Screen
        name={ABOUT_SCREEN_LABEL}
        component={AboutStackScreen}
      />
      <Tab.Screen
        name={QUOTES_SCREEN_LABEL}
        component={QuotesStackScreen}
      />
    </Tab.Navigator>
  </NavigationContainer>
)

const tabOptions = {
  tabStyle: {
    paddingBottom: 13
  },
  labelStyle: {
    fontSize: 18
  }
}
