import {StyleSheet} from 'react-native';
import Colors from '../../constants/colors';
import {IStyles} from './types';

const styles = StyleSheet.create<IStyles>({
  container: {
    flex: 1,
    backgroundColor: Colors.grey,
  },
  searchContainer: {
    backgroundColor: Colors.white,
  },
});

export default styles;
