import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Calculator from './pages/Main';

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
    return(
        <NavigationContainer>

            <Navigator
              screenOptions={{
                headerShown: true, 
                  cardStyle: {backgroundColor: 'rgba(1, 1, 1, 1)'},
                  headerStyle: {backgroundColor: 'rgba(1, 1, 1, 1)'},
                  headerTintColor: 'rgba(72, 167, 243, 1)',
                  headerTitleAlign: 'center'
                }}
          >

              <Screen 
                name="🚚 Calculator" 
                component={Calculator}
              />

          </Navigator>

        </NavigationContainer>
    );
  }
