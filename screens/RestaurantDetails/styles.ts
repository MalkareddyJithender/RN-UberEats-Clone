import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  divider: {
    marginVertical: 10,
  },
  cartButtonContainer: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    bottom: 20,
    zIndex: 999,
  },
});

export default styles;
