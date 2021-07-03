import React from 'react';
import { View, Text, FlatList} from "react-native";
import { styles } from './styles';

export function MediaList({ data, renderItem }) {
  return (
    <View style={styles.container}>
      <Text>
      MediaList
      </Text>
      <FlatList
        data={data}
        renderItem={renderItem}  
      />
    </View>
  )
}
