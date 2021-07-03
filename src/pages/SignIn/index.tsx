import React, { useCallback, useRef } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
  TextInput,
} from 'react-native';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import { styles } from './styles';
import logoImg from '../../assets/logo_gd7_white.png';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const { navigate } = useNavigation();
  const handleSignIn = useCallback((data: object) => {
    console.log(data);
    // Alert.alert('data', JSON.stringify(data));
    navigate('Dashboard');
  }, []);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
    >
      <ScrollView
        keyboardShouldPersistTaps='handled'
        contentContainerStyle={{ flex: 1 }}
      >
        <View style={styles.container}>
          <Image source={logoImg} />
          <View>
            <Text style={styles.title}>Faça seu login</Text>
          </View>
          <Form ref={formRef} onSubmit={handleSignIn}>
            <Input
              name='email'
              icon='email'
              placeholder='E-Mail'
              autoCorrect={false}
              autoCapitalize='none'
              keyboardType='email-address'
              returnKeyType='next'
              onSubmitEditing={() => {
                //dispara o foco p/ campo password após next
                passwordInputRef.current?.focus();
              }}
            />
            <Input
              ref={passwordInputRef}
              name='password'
              icon='lock'
              placeholder='Senha'
              secureTextEntry
              returnKeyType='send'
              onSubmitEditing={() => {
                formRef.current?.submitForm();
              }}
            />
            <Button
              onPress={() => {
                formRef.current?.submitForm();
              }}
            >
              Entrar
            </Button>
          </Form>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export { SignIn };
