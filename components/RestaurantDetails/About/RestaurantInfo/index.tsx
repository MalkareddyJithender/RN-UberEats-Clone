import React, {useState} from 'react';
import {View, Text} from 'react-native';

import useAppTheme from '../../../../hooks/useAppTheme';
import IconButton from '../../../UI/IconButton';
import createStyles from './styles';
import {Snackbar} from 'react-native-paper';

interface RestaurantInfoProps {
  title: string;
  description: string;
}

export default function Index({
  title,
  description,
}: RestaurantInfoProps): JSX.Element {
  const [heartIsOutline, setHeartIsOutline] = useState<boolean>(true);
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const theme = useAppTheme();
  const styles = createStyles(theme);

  function heartIconHandler() {
    setHeartIsOutline(!heartIsOutline);
    setSnackbarVisible(true);
  }

  function onDismissHandler() {
    setSnackbarVisible(false);
  }

  let snackbarText = `${title} has added to favourites!`;

  if (snackbarVisible && heartIsOutline) {
    snackbarText = `${title} has removed from favourites!`;
  }

  return (
    <>
      <View style={styles.info}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          <IconButton
            type="Ionicons"
            icon={heartIsOutline ? 'heart-outline' : 'heart'}
            size={25}
            color={theme.colors.heart}
            onPress={heartIconHandler}
          />
        </View>
        <Text style={styles.description}>{description}</Text>
      </View>
      <Snackbar
        visible={snackbarVisible}
        duration={3000}
        onDismiss={onDismissHandler}
        wrapperStyle={styles.snackbar}>
        <Text style={styles.snackbarText}>{snackbarText}</Text>
      </Snackbar>
    </>
  );
}
