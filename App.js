import * as React from 'react';
import { View, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';
import Mode from './components/Mode'
import Modeone from './components/Modeone'
import Modetwo from './components/Modetwo'
import {Button} from "react-native-paper"



function HomeScreen({ navigation }) {
  return (
    <ScrollView style={{ flex: 1,padding:10,paddingBottom:100,backgroundColor:"white" }}>
      <Home/>
      <Button
      mode="outlined"
            onPress={() => navigation.navigate('Mode')}
      >Challenge Mode</Button>
      <View style={{marginVertical:20}}></View>
    </ScrollView>
  );
}


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dicricket">
        <Stack.Screen name="Dicricket" component={HomeScreen} />
        <Stack.Screen name="Mode" component={Mode} />
        <Stack.Screen name="Challenge-Target" component={Modeone} />
        <Stack.Screen name="Challenge-Over" component={Modetwo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
