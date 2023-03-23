import {StyleSheet} from 'react-native';
import Colors from '../../../constants/colors';

const styles = StyleSheet.create({
  category: {
    marginRight: 10,
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 40,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 12,
    fontWeight: 'bold',
    color: Colors.black,
  },
});

export default styles;
