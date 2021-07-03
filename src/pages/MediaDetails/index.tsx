import React, { useCallback } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { theme } from '../../global/styles/theme';

import { styles } from './styles';

interface mediaInfoParams {
  id: string | number;
  name: string;
  details: string;
  genreId: string;
  image_url: string;
  part: string;
  stats: string;
  url: string;
}

interface RouteParams {
  mediaInfo: mediaInfoParams;
}
// interface RouteParams {
//   mediaId: string;
// }

export function MediaDetails() {
  // const { user } = useAuth();
  const route = useRoute();
  const { mediaInfo } = route.params as RouteParams;

  const { goBack, navigate } = useNavigation();
  const navigateBack = useCallback(() => {
    goBack();
  }, [goBack]);
  const navigateToMediaPlayer = useCallback(
    (mediaImageUrl: string, mediaUrl: string, mediaName: string) => {
      navigate('MediaPlayer', { mediaImageUrl, mediaUrl, mediaName });
    },
    [navigate]
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={navigateBack}>
          <Feather name='chevron-left' size={24} color={theme.colors.heading} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{'Capacitação'}</Text>
      </View>
      <ScrollView>
        <Text style={styles.mediaTitle}>{mediaInfo.name}</Text>
        <RectButton
          style={styles.mediaImageContainer}
          onPress={() =>
            navigateToMediaPlayer(
              mediaInfo.image_url,
              mediaInfo.url,
              mediaInfo.name
            )
          }
        >
          <Image
            style={styles.mediaImage}
            source={{ uri: mediaInfo.image_url }}
          />
        </RectButton>
        <View style={styles.mediaContainer}>
          <Text style={styles.mediaMeta}>Descrição:</Text>
          <Text style={styles.mediaMeta}>{mediaInfo.details}</Text>
        </View>
        <View style={styles.mediaContainer}>
          <Text style={styles.mediaMeta}>Genero:</Text>
          <Text style={styles.mediaMeta}>{mediaInfo.genreId}</Text>
        </View>
        <View style={styles.mediaContainer}>
          <Text style={styles.mediaMeta}>Part:</Text>
          <Text style={styles.mediaMeta}>{mediaInfo.part}</Text>
        </View>
        <View style={styles.mediaContainer}>
          <Text style={styles.mediaMeta}>Stats:</Text>
          <Text style={styles.mediaMeta}>{mediaInfo.stats}</Text>
        </View>
      </ScrollView>
    </View>
  );
}
