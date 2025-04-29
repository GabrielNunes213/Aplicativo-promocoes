import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaInicial from './src/screens/TelaInicial/TelaInicial';
import DetalhesProduto from './src/screens/DetalhesProduto/DetalhesProduto';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="TelaInicial" component={TelaInicial} />
        <Stack.Screen name="DetalhesProduto" component={DetalhesProduto} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
