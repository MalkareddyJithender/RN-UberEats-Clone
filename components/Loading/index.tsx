import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';

const Loading: FC = () => {
  return (
    <View style={styles.loadingContainer}>
      <LottieView
        source={require('../../assets/animations/scanner.json')}
        autoPlay
        loop
        speed={2}
        style={styles.loading}
      />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  loadingContainer: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loading: {
    height: 200,
  },
});
