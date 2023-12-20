// Navigation.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen'; // substitua pelo nome do seu arquivo principal
import PaymentScreen from './PaymentScreen'; // Importe a tela de pagamento
//import App from './App';


const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
        {/* Adicione outras telas conforme necessário */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
