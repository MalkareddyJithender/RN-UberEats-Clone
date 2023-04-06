import React, {FC} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import useAppTheme from '../../../hooks/useAppTheme';
import createStyles from './styles';

interface LoadingOverlayProps {
  message?: string;
  size: 'small' | 'large';
}

const LoadingOverlay: FC<LoadingOverlayProps> = ({message, size}) => {
  const theme = useAppTheme();
  const styles = createStyles(theme);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
      <ActivityIndicator size={size} color={theme.colors.orange} />
    </View>
  );
};

export default LoadingOverlay;
