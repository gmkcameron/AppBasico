import React, { useEffect } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import * as AppleAuthentication from 'expo-apple-authentication';
import { StripeProvider, useStripe } from '@stripe/stripe-react-native';

export default function App() {
  const { initPaymentSheet, presentPaymentSheet } = useStripe();

  useEffect(() => {
    const initializePaymentSheet = async () => {
      await initPaymentSheet({
        paymentIntentClientSecret: 'sk_test_51NT5yHIqocWec6vphB8AiZQndnUASwO2i7PzFVhSbUbFaVuhcZv1MWSMqC2bTxijVtD3BZarEpLz5RDAWfcClAu200uxIFWGzU', // Obtido do seu servidor
      });
    };

    initializePaymentSheet();
  }, []);

  const handleApplePay = async () => {
    try {
      const { status, response } = await AppleAuthentication.startAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ],
      });

      if (status === 'success') {
        // Realize o pagamento usando o Stripe
        const { error } = await presentPaymentSheet();
        if (error) {
          Alert.alert('Erro no pagamento', error.message);
        } else {
          Alert.alert('Pagamento concluído com sucesso');
        }
      } else {
        Alert.alert('Autenticação da Apple falhou');
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <StripeProvider publishableKey="pk_test_51NT5yHIqocWec6vphhvTclKOsKsoYngjxUlMV25TIpHoKRZPK23hliuXO4VHmv89SKgklOPneMCY42AsY7gunPv200dEzVeitP">
      <View style={styles.container}>
        <AppleAuthentication.AppleAuthenticationButton
          buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
          buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
          cornerRadius={5}
          style={styles.button}
          onPress={handleApplePay}
        />
      </View>
    </StripeProvider>
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

/* //Implementando Apple Authentication
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
}); */