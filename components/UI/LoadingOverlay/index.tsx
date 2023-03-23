import React, {FC} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import Colors from '../../../constants/colors';
import styles from './styles';

interface LoadingOverlayProps {
  message: string;
  size: 'small' | 'large';
}

const LoadingOverlay: FC<LoadingOverlayProps> = ({message, size}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
      <ActivityIndicator size={size} color={Colors.orange} />
    </View>
  );
};

export default LoadingOverlay;
