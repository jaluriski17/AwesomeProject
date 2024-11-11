import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from'@fortawesome/react-native-fontawesome';
import { faUser,} from '@fortawesome/free-regular-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import Mahasiswa from './Mahasiswa';
import { WebView } from 'react-native-webview';

function HomeScreen() {
  return (
    
      <Mahasiswa/>
  );
}
function WebScreen() {
  return (
    
      <WebScreen
      sourec = {{uri:'https://github.com/jaluriski17'}}/>
  );
}

function DatamahasiswaScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Profil" component={HomeScreen} 
        options={{ 
          headerShown: false,
          tabBarIcon: ({color})=> (
            <FontAwesomeIcon icon ={faUser} color ={color} size={32}/>
          ),
          }} /> 

       <Tab.Screen name="GitHub" component={WebScreen} 
        options={{ 
          headerShown: false,

          tabBarIcon: ({color})=> (
            <FontAwesomeIcon icon ={faUser} color ={color} size={32}/>
          ),
          }} /> 

        <Tab.Screen name="Data Mahasiswa " component={DatamahasiswaScreen} 
        
        options={{ 
          headerShown: false,
          tabBarIcon: ({color})=> (
            <FontAwesomeIcon icon ={faGraduationCap} color ={color} size={32}/>
          ),
          }}


        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}