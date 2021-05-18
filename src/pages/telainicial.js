
import React from 'react';
import { StyleSheet, Text, Button, View, Image } from 'react-native';

export default function TelaInicial(props) {
  return (
    <View style={styles.container}>
      
      
          
      <Button
        title= "Tela1"
        onPress = { () => { props.navigation.navigate('Tela1') } }
        
      />  
        <Button
            title= "Tela2"
            onPress = { () => { props.navigation.navigate('Tela2') } }
        />  
        <Button
            title= "Tela3"
            onPress = { () => { props.navigation.navigate('Tela3') } }
        />  

    </View>
  
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  Imagem:{
    width: 200,
    height: 200
  }

});