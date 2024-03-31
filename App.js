import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Header from './components/header';
import Body from './components/Body';
import Details from './components/Details';

const Stack = createNativeStackNavigator();
const HomeScreen = ({navigation}) => {
  
  return (
  <SafeAreaView style={styles.container}>
    <StatusBar
      animated={true}
      backgroundColor="red"
    />
    <Header />
    <Body />
  </SafeAreaView>
  )
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            presentation: 'modal',
            animationTypeForReplace: 'push',
            animation:'slide_from_right'
          }}
        />
        <Stack.Screen name="Details" component={Details} options={{
              headerShown: false,
              presentation: 'modal',
              animationTypeForReplace: 'push',
              animation:'slide_from_left'
            }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%'
  },
});
