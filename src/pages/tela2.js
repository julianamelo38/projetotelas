
import React from 'react';
import { StyleSheet, Text, Button, View, Image } from 'react-native';

export default function Tela2(props) {
  return (
    <View style={styles.container}>
     
      
      
      <View>
        <Image style={styles.Imagem}
        source= {require('../../assets/imagem2.png')} />
      </View>
            
      <Button
         title= "Tela 2"
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
});