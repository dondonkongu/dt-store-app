import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from './TabNavigations/BottomTabs';
import Login from './pages/Login';
import Register from './pages/Register';
import AuthProvider from './context/AuthContext';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer >
       <Stack.Navigator screenOptions={{ headerShown:false, animation:'none' }}>
        <Stack.Screen name="BottomTabs" component={BottomTabs} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
      </NavigationContainer>
      </AuthProvider>
  );
}

