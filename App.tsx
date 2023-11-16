import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import type { RootStackParamList } from './src/navigation.models';
import DetailsScreen from './src/screens/Details';
import HomeScreen from './src/screens/Home';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'My tasks',
            headerBlurEffect: 'light',
            headerStyle: {
              backgroundColor: '#006CB7',
            },
            headerTintColor: 'white',
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            title: 'Detailed View',
            headerBlurEffect: 'light',
            headerStyle: {
              backgroundColor: '#006CB7',
            },
            headerTintColor: 'white',
            headerBackTitleVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
