import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from './TabNavigations/BottomTabs';
import Login from './pages/Login';
import Register from './pages/Register';
import { AuthProvider } from './context/AuthContext';
import DetailProduct from './screens/DetailProduct';
import ShippingPolicy from './screens/policyScreen/ShippingPolicy';
import ReturnPolicy from './screens/policyScreen/ReturnPolicy';
import PrivacyPolicy from './screens/policyScreen/PrivacyPolicy';
import Checkout from './screens/CheckoutAndPayment/Checkout';
import Search from './pages/Search';
import Filter from './pages/Filter';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer >
       <Stack.Navigator screenOptions={{ headerShown:false, animation:'none' }}>

        <Stack.Screen name="BottomTabs" component={BottomTabs} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="DetailProduct" component={DetailProduct} />
        <Stack.Screen name="ShippingPolicy" component={ShippingPolicy} />
        <Stack.Screen name="ReturnPolicy" component={ReturnPolicy} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
        <Stack.Screen name="Checkout" component={Checkout} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Filter" component={Filter} />
        </Stack.Navigator>
      </NavigationContainer>
      </AuthProvider>
  );
}

