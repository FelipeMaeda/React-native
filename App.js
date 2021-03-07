import React, { useEffect, useState } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import Page from './views/pages';
import { css } from './assets/css/GlobalStyles';

export default function App() {

  const [product, setProduct] = useState('bola');
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    if(quantity > 0){
      Alert.alert('Novo produto foi adicionado! ');
    }
  });

  const props = {
    empresa: 'Teste',
    name: 'Felipe',
    idade: '15',
    produto: product,
    quantidade: quantity,
  }

  return (
    <View style={css.container}>
      <Text>{product}</Text>
      <Page {...props} />
      <Button title='Adicionar produtos' onPress={() => setQuantity(quantity + 1)} />
    </View>
  );
}