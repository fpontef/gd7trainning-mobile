import React from 'react';
import { View , Text } from "react-native";
import { RectButton, RectButtonProperties } from 'react-native-gesture-handler';

import { styles } from "./styles";

interface ButtonProps extends RectButtonProperties {
  children: string;
}
// type Props = {
//   children: React.ReactChildren
// }
// JSX.Element -> é a tipagem da saída, mas não tem necessidade
// export function Button ({ children, ...rest } : ButtonProps): JSX.Element {
export function Button ({ children, ...rest } : ButtonProps) {
// export function Button({ children }: Props) {
// export const Button: React.FC = ({ children }) => {
  return (
    <View>
      <RectButton {...rest} style={styles.container} >
        <Text style={styles.buttonText}>
          {children}
        </Text>
      </RectButton>
    </View>
  )
}
