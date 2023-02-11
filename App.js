import 'react-native-gesture-handler';
import * as React from 'react';
import Home from './components/Home';
import BBC from './components/BBC';
import Business from './components/Business';
import Science from './components/Science';
import Sports from './components/Sports'
import Entertainment from './components/Entertainment';
import Technology from './components/Technology'
import Health from './components/Health';
import OurMenu from './components/OurMenu';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const Drawer = createDrawerNavigator();
  return (
     <NavigationContainer >
        <Drawer.Navigator>
               <Drawer.Screen name="HOME" component={Home} />
               <Drawer.Screen name="BBC" component={BBC} />
               <Drawer.Screen name="BUSINESS" component={Business}/>
               <Drawer.Screen name="ENTERTAINMENT" component={Entertainment} />
               <Drawer.Screen name="HEALTH" component={Health}/>
               <Drawer.Screen name="SCIENCE" component={Science} />
               <Drawer.Screen name="SPORTS" component={Sports}/>
               <Drawer.Screen name="TECHNOLOGY" component={Technology}/>
      </Drawer.Navigator>
     </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
