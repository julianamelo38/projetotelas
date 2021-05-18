
import React from 'react';
import { StyleSheet, Text, Button, View, Image } from 'react-native';

export default function Tela1(props) {
  return (
    <View style={styles.container}>
      
      
      <View>
        <Image style={styles.Imagem}
        source= {require('../../assets/imagem1.png')} />
      </View>
      
      <Button
        title= "Tela1"
        onPress = { () => { props.navigation.navigate('Tela2') } }
        
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