import {StyleSheet} from 'react-native';

import Colors from '../../constants/colors';
import {IStyles} from './types';

const styles = StyleSheet.create<IStyles>({
  categories: {
    backgroundColor: Colors.white,
    paddingVertical: 8,
    marginTop: 10,
    paddingLeft: 20,
  },
});

export default styles;
