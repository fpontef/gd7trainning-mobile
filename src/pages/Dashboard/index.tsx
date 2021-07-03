import React, { useEffect, useState, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import { api } from '../../services/api';
import { RectButton } from 'react-native-gesture-handler';
import { styles } from './styles';

interface Media {
  id: string;
  name: string;
  image_url: string;
}

export const Dashboard: React.FC = () => {
  const [media, setMedia] = useState<Media[]>([]);

  const { navigate } = useNavigation();
  const navigateToProfile = useCallback(() => {
    navigate('Profile');
  }, [navigate]);

  // const navigateToMediaDetails = useCallback(
  //   (mediaId: string) => {
  //     navigate('MediaDetails', { mediaId });
  //   },
  //   [navigate]
  // );
  const navigateToMediaDetails = useCallback(
    (mediaInfo: object) => {
      navigate('MediaDetails', { mediaInfo });
    },
    [navigate]
  );

  useEffect(() => {
    api.get('movie').then((response) => {
      setMedia(response.data.data);
    });
  }, []);

  return (
    <View style={styles.headerContainer}>
      <View style={styles.header}>
        <TouchableOpacity onPress={navigateToProfile}>
          <Text style={styles.headerTitle}>
            Olá, {''}
            <Text style={styles.userName}>{'Fulano'}</Text>
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        contentContainerStyle={styles.mediaList}
        data={media}
        ListHeaderComponent={
          <Text style={styles.mediaListTitle}>Capacitação</Text>
        }
        keyExtractor={(media) => media.id}
        renderItem={({ item }) => (
          <RectButton
            style={styles.mediaContainer}
            onPress={() => navigateToMediaDetails(item)}
          >
            <Image style={styles.mediaThumb} source={{ uri: item.image_url }} />
            <View style={styles.mediaInfo}>
              <Text style={styles.mediaTitle}>{item.name}</Text>
            </View>
          </RectButton>
        )}
      />
    </View>
  );
};
