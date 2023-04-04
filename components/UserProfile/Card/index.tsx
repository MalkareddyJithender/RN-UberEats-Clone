import React from 'react';
import {View, Text} from 'react-native';
import {Avatar} from 'react-native-paper';

import useAppTheme from '../../../hooks/useAppTheme';
import createStyles from './styles';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store';

export default function Index(): JSX.Element {
  const theme = useAppTheme();
  const styles = createStyles(theme);
  const guser = useSelector((state: RootState) => state.auth.googleUser);

  return (
    <View style={styles.card}>
      <View style={styles.userInfo}>
        <Avatar.Image
          size={120}
          source={{
            uri: guser?.photoUrl,
          }}
        />
        <Text style={[styles.fontBase, styles.userName]}>
          {guser?.displayName}
        </Text>
        <Text style={[styles.fontBase, styles.userPosition]}>
          Uber Eats User
        </Text>
      </View>
      <View style={styles.followContent}>
        <View style={styles.followContainer}>
          <Text style={[styles.fontBase, styles.followText,styles.fontBaseBold]}> 1000 </Text>
          <Text style={[styles.fontBase, styles.followText]}> Followers </Text>
        </View>
        <View style={[styles.line]} />
        <View style={styles.followContainer}>
          <Text style={[styles.fontBase, styles.followText,styles.fontBaseBold]}> 1200 </Text>
          <Text style={[styles.fontBase, styles.followText]}> Following </Text>
        </View>
      </View>
    </View>
  );
}
