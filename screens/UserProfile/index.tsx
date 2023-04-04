import React from 'react';
import {View, Text} from 'react-native';
import UserCard from '../../components/UserProfile/Card';
import UserItem from '../../components/UserProfile/UserItem';

import createStyles from './styles';
import useAppTheme from '../../hooks/useAppTheme';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';

export default function Index() {
  const theme = useAppTheme();
  const styles = createStyles(theme);
  const guser = useSelector((state: RootState) => state.auth.googleUser);

  return (
    <SafeAreaView style={styles.container}>
      <UserCard />
      <UserItem icon="mail" title="Email" text={guser?.email} />
      <UserItem
        icon="phone-portrait-outline"
        title="Mobile"
        text="+916302696865"
      />
      <UserItem icon="logo-twitter" title="Twitter" text="@jithu123" />
      <UserItem
        icon="logo-instagram"
        title="Instagram"
        text="jithender_malkareddy"
      />
      <UserItem
        icon="logo-facebook"
        title="Facebook"
        text="Malkareddy Jithender"
      />
    </SafeAreaView>
  );
}
