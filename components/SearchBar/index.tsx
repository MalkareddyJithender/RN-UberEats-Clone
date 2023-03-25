import React, {FC} from 'react';
import {View} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons';
import useAppTheme from '../../hooks/useAppTheme';
import createStyles from './styles';

const SearchBar: FC = () => {
  const theme = useAppTheme();
  const styles = createStyles(theme);

  return (
    <View>
      <GooglePlacesAutocomplete
        placeholder="Search"
        query={{}}
        styles={styles}
        renderRightButton={() => (
          <View>
            <Ionicons name="location-sharp" size={24} />
          </View>
        )}
      />
    </View>
  );
};

export default SearchBar;
