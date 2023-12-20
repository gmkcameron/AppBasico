// PaymentScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const PaymentScreen = ({ navigation }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handlePayment = () => {
    // Lógica de pagamento simulada
    console.log('Pagamento processado com sucesso!');
    // Redirecionar para a tela anterior (ou qualquer outra tela desejada)
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text>Dados do Cartão:</Text>
      <TextInput
        style={styles.input}
        placeholder="Número do Cartão"
        value={cardNumber}
        onChangeText={setCardNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="Data de Expiração (MM/YY)"
        value={expirationDate}
        onChangeText={setExpirationDate}
      />
      <TextInput
        style={styles.input}
        placeholder="CVV"
        value={cvv}
        onChangeText={setCvv}
        secureTextEntry
      />
      <TouchableOpacity style={styles.paymentButton} onPress={handlePayment}>
        <Text style={styles.paymentButtonText}>Pagar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    width: 250,
  },
  paymentButton: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  paymentButtonText: {
    color: 'white',
  },
});

export default PaymentScreen;