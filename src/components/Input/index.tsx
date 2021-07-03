import React, 
  { useEffect, 
    useRef, 
    useImperativeHandle, 
    forwardRef 
  } from 'react';
import { View } from "react-native";
import { TextInput, TextInputProps } from "react-native";
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useField } from '@unform/core';

interface InputProps extends TextInputProps {
  name: string;
  icon: any;
}
interface InputValueReference {
  value: string;
}
interface InputRef {
  focus(): void;
}

const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = (
  {name, icon, ...rest }, 
  ref, 
) => {
  // inputElementRef -> usar em necessidade de setar o valor de algum campo a 
  // partir de uma ação do usuário. Encontrada em: formRef.current.setFieldValue
  const inputElementRef = useRef<any>(null);
  const { registerField, defaultValue = '', fieldName, error } = useField(name);
  const inputValueRef = useRef<InputValueReference>({ value: defaultValue });

  // Edge case do hook useImperativeHandle, no caso pq temos necessidade de 2 refs
  useImperativeHandle(ref, () => {
    return {
      focus: () => {
        inputElementRef.current.focus();
      }
    }
  });

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      // O setValue({...}) faz parte função extra do inputElementRef
      // é possível remover ambos se não for usar a funcionalidade.
      setValue(ref: any, value: string) {
        inputValueRef.current.value = value;
        // inputElementRef: é responsável por mudar visualmente o texto do input
        inputElementRef.current.setNativeProps({ text: value });
      },
      clearValue() {
        inputValueRef.current.value = '';
        inputElementRef.current.clear();
      }
    })
  }, [fieldName, registerField]);

  return (
    <View style={styles.container} >
      <MaterialCommunityIcons
        name={icon}
        color={theme.colors.inputPlaceholder}
        size={24}
        style={styles.icon}
      />

      <TextInput 
        {...rest}
        ref={inputElementRef}
        placeholderTextColor={theme.colors.inputPlaceholder} 
        style={styles.textInput}
        defaultValue={defaultValue}
        onChangeText={(value) => {
          inputValueRef.current.value = value;
        }}
        ></TextInput>
    </View>
  )
}

// Não é gambiarra se tem na documentação...
const WrappedInput = forwardRef(Input);
export {
  WrappedInput as Input
}
