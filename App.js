// App.js
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import * as AppleAuthentication from 'expo-apple-authentication';
import Navigation from './navigation'; // substitua pelo caminho do seu arquivo Navigation

export default function App() {
  const [paymentSheetVisible, setPaymentSheetVisible] = useState(false);

  const handleApplePay = async () => {
    try {
      const { status, response } = await AppleAuthentication.startAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ],
        requestedOperation: AppleAuthentication.AppleAuthenticationOperation.LOGIN,
        requestedPresentationContext: 'app',
          //AppleAuthentication.AppleAuthenticationPresentationContext.APP,
      });

      if (status === 'success') {
        // Use a resposta para autenticar o usuário no seu sistema
        console.log(response);
        // Mostrar a tela de pagamento aqui
        setPaymentSheetVisible(true);
      } else {
        // O usuário cancelou a autenticação ou ocorreu um erro
        console.log('Autenticação da Apple falhou');
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      {/* Navegação */}
      <Navigation />

      {/* Botão de Pagar com Apple Pay */}
      <TouchableOpacity onPress={handleApplePay} style={styles.applePayButton}>
        <Text style={styles.applePayButtonText}>Pagar com Apple Pay</Text>
      </TouchableOpacity>

      {/* Conteúdo da Tela de Pagamento */}
      {paymentSheetVisible && (
        <View style={styles.paymentSheetContainer}>
          <Text>Detalhes do Cartão e Tela de Pagamento</Text>
          {/* Adicione outros componentes e lógica necessários aqui */}
          <TouchableOpacity onPress={() => setPaymentSheetVisible(false)}>
            <Text>Fechar Tela de Pagamento</Text>
          </TouchableOpacity>
        </View>
      )}

      <StatusBar style="auto" />
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
  applePayButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'black',
    borderRadius: 5,
  },
  applePayButtonText: {
    color: 'white',
  },
  paymentSheetContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
