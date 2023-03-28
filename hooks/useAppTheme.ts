import {useTheme} from 'react-native-paper';
import {IMD3Theme} from '../theme';

function useAppTheme<T = IMD3Theme>() {
  const theme = useTheme<T>();
  return theme;
}

export default useAppTheme;
