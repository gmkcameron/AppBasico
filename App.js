//Implementando Apple Authentication
import * as AppleAuthentication from 'expo-apple-authentication';
import { View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <AppleAuthentication.AppleAuthenticationButton
        buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
        buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
        cornerRadius={5}
        style={styles.button}
        onPress={async () => {
          try {
            const credential = await AppleAuthentication.signInAsync({
              requestedScopes: [
                AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
                AppleAuthentication.AppleAuthenticationScope.EMAIL,
              ],
            });
            // signed in
          } catch (e) {
            if (e.code === 'ERR_REQUEST_CANCELED') {
              // handle that the user canceled the sign-in flow
            } else {
              // handle other errors
            }
          }
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 200,
    height: 44,
  },
});



/* // App.js
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import * as AppleAuthentication from 'expo-apple-authentication';
import Navigation from './navigation'; // substitua pelo caminho do seu arquivo Navigation

export default function App() {
  const [paymentSheetVisible, setPaymentSheetVisible] = useState(false);

  const handleApplePay = async () => {
    try {
      const { status, response } = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ],
        requestedOperation: AppleAuthentication.AppleAuthenticationOperation.LOGIN,
        requestedPresentationContext: AppleAuthentication.AppleAuthenticationPresentationContext.PRESENT,
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
      {/* Navegação}
      <Navigation />

      {/* Botão de Pagar com Apple Pay}
      <TouchableOpacity onPress={handleApplePay} style={styles.applePayButton}>
        <Text style={styles.applePayButtonText}>Pagar com Apple Pay</Text>
      </TouchableOpacity>

      {/* Conteúdo da Tela de Pagamento}
      {paymentSheetVisible && (
        <View style={styles.paymentSheetContainer}>
          <Text>Detalhes do Cartão e Tela de Pagamento</Text>
          {/* Adicione outros componentes e lógica necessários aqui}
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
 */