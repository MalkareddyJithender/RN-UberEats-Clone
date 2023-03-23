import {StyleSheet} from 'react-native';
import Colors from '../../../../constants/colors';

const styles = StyleSheet.create({
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 15,
  },
  menuInfo: {
    justifyContent: 'space-evenly',
    width: 250,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.black,
  },
  text: {
    fontWeight: '400',
    color: Colors.black,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  divider: {
    marginHorizontal: 15,
  },
});

export default styles;
