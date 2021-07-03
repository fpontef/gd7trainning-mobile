import React, { useState, useRef, useCallback } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { theme } from '../../global/styles/theme';

import { styles } from './styles';

interface VideoStatusProp {
  isPlaying: AVPlaybackStatus | {};
}

export function MediaPlayer() {
  const [poster, setPoster] = useState(true);
  const videoRef = useRef<Video>(null);
  const { goBack } = useNavigation();
  const navigateBack = useCallback(() => {
    goBack();
  }, [goBack]);

  const route = useRoute();
  const { mediaImageUrl, mediaUrl, mediaName } = route.params as any;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={navigateBack}>
          <Feather name='chevron-left' size={24} color={theme.colors.heading} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>
          {'Detalhes de '}
          {mediaName}
        </Text>
      </View>

      <View style={styles.videoContainer}>
        <Video
          ref={videoRef}
          style={styles.video}
          source={{
            uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
          }}
          // source={{
          //   uri: mediaUrl,
          // }}
          useNativeControls
          usePoster={poster}
          posterSource={{ uri: mediaImageUrl }}
          posterStyle={{ width: 320, height: 240 }}
          onReadyForDisplay={() => setPoster(false)}
          shouldPlay={true}
          resizeMode='contain'
        />
      </View>
    </View>
  );
}
