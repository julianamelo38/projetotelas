import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Tela1 from './pages/tela1';
import Tela2 from './pages/tela2';
import Tela3 from './pages/tela3';
import TelaInicial from './pages/telainicial';

const Stack = createStackNavigator();

export default function Rotas () {
    return(
        <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="TelaInicial" component={TelaInicial} />
            <Stack.Screen name="Tela1" component={Tela1} />
            <Stack.Screen name="Tela2" component={Tela2} />
            <Stack.Screen name="Tela3" component={Tela3} />
           
            
        </Stack.Navigator>
        </NavigationContainer>



    )
    
}