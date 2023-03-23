import {StyleSheet} from 'react-native';
import Colors from '../../../constants/colors';

export const styles = StyleSheet.create({
  restaurant: {
    backgroundColor: Colors.white,
    padding: 16,
    marginBottom: 12,
  },
  image: {
    width: '100%',
    height: 220,
    marginBottom: 5,
    borderRadius: 3,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 13,
    fontWeight: '800',
  },
  text: {
    color: Colors.greyDark,
    fontSize: 11,
  },
  rating: {
    backgroundColor: Colors.grey,
    height: 28,
    width: 28,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    elevation: 4,
  },
  ratingText: {
    fontWeight: 'bold',
    fontSize: 13,
  },
});
