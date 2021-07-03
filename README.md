# Observações:

```console
expo install expo-app-loading
npm i react-native-iphone-x-helper
```

```js
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
header: {
...,
marginTop: getStatusBarHeight() + 26,
}
```

# Rotas:

```console
npm install @react-navigation/native
Installing dependencies into an Expo managed project#
expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

npm install @react-navigation/stack
```

# @expo/vector-icons@12.0.5 (JA VEM NO EXPO)

Visitar https://icons.expo.fyi/ pra encontrar algo que tenha interesse.

```js
import { ALGO } from @expo/vector-icons@12.0.5
```

# SVG no React Native:

```console
expo install react-native-svg
```

## Necessário também svg transform expo, p/ usar svg como componentes

```console
npm i -D react-native-svg-transformer
```

## Necessário criar um arquivo no Expo. Ler com cuidado pois tem muita instrução.

https://github.com/kristerkari/react-native-svg-transformer

## Depois é necessário criar um tipo em @types/svg.d.ts (ou no index.d.ts)

```js
declare module "\*.svg" {
import React from 'react';
import { SvgProps } from 'react-native-svg';
const content: React.FC<SvgProps>;
export default content;
}
```

# Form:

usando unform:
Apresenta erros do jsx, então uma solução possível (enquanto expo n atualizar pra react 17 ou mais novo)
// Sugeriram esse deu erro:
npm i @unform/core@2.1.3 @unform/mobile@2.1.3
//
npm i @unform/core@1.9.8 @unform/mobile@1.9.8
//
npm i @unform/core@latest @unform/mobile@latest

única solução foi:
ir até o package.json, alterar a versão do react e react-dom e dar um npm install pra atualizar tudo.
Environment:
"@unform/core": "^2.1.3",
"@unform/mobile": "^2.1.3",
"expo": "~41.0.1",
"react": "17.0.1",
"react-dom": "17.0.1",

# Altenativas para "form"

- Usando formatos de input pra texto e "botão" adaptado:
  https://reactnative.dev/docs/textinput
  https://reactnative.dev/docs/touchableopacity
- Ambos acima com Hooks
- É bom ver também: https://reactnative.dev/docs/handling-touches

# Typescript tips:

https://blog.echobind.com/react-with-typescript-components-as-function-declarations-vs-function-expressions-e433ac8d6938
https://github.com/typescript-cheatsheets/react

# Caso Localhost não funcione no emulador ANDROID

```console
adb reverse tcp:3333 tcp:3333
```

# Avaliando qual player de vídeo melhor adapta-se:

https://github.com/react-native-video/react-native-video
ou
expo-av: https://docs.expo.io/versions/latest/sdk/av/
expo install expo-av

# useCallback

// useCallback(fn, deps)
o useCallback no projeto é usado pra evitar a "recriação" desnecessária da função e re-renderizar os componentes desnecessariamente. Evita a FUNÇÃO recriada, vigiando-a. Função é memorizada.

// useMemo(() => fn, deps)
o useMemo não está no momento. No caso ele "memoriza" propriedades que não devem ser recalculadas toda vez que o componente é renderizado. É pra evitar a EXECUÇÃO DA FUNÇÃO memorizada ser repetida desnecessariamente, como um state de um filtro que se não for modificado, não vai atualizar o componente. O "valor" é memorizado.
https://stackoverflow.com/questions/66429202/what-are-production-use-cases-for-the-useref-usememo-usecallback-hooks
https://dmitripavlutin.com/dont-overuse-react-usecallback/
