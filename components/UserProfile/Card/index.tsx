import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Avatar, Menu} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import auth from '@react-native-firebase/auth';

import useAppTheme from '../../../hooks/useAppTheme';
import createStyles from './styles';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store';

export default function Index(): JSX.Element {
  const theme = useAppTheme();
  const styles = createStyles(theme);
  const [menuVisible, setMenuVisible] = useState(false);
  const authentication = useSelector((state: RootState) => state.auth);
  const user = authentication.user || authentication.googleUser;
  const userDP = authentication.user?.email?.slice(0, 1).toUpperCase();

  function openMenu() {
    setMenuVisible(true);
  }

  function closeMenu() {
    setMenuVisible(false);
  }

  async function logoutHandler() {
    await auth().signOut();
    // await
  }

  const Profile: JSX.Element = authentication.googleUser ? (
    <Avatar.Image
      size={100}
      source={{
        uri: authentication.googleUser.photoUrl,
      }}
    />
  ) : (
    <Avatar.Text size={100} label={userDP!} />
  );

  return (
    <View style={styles.card}>
      <View style={styles.iconsContainer}>
        <Icon name="arrow-back" size={24} color={theme.colors.white} />
        <Text style={[styles.fontBase, styles.fontBaseBold]}> Profile </Text>
        <Menu
          visible={menuVisible}
          anchor={
            <Icon
              name="settings"
              size={24}
              color={theme.colors.white}
              onPress={openMenu}
            />
          }
          anchorPosition="bottom"
          onDismiss={closeMenu}>
          <Menu.Item title="Log out" onPress={logoutHandler} />
        </Menu>
      </View>
      <View style={styles.userInfo}>
        {Profile}
        <Text style={[styles.fontBase, styles.userName]}>
          {user?.displayName}
        </Text>
        <Text style={[styles.fontBase, styles.userPosition]}>
          Uber Eats User
        </Text>
      </View>
      <View style={styles.followContent}>
        <View style={styles.followContainer}>
          <Text
            style={[styles.fontBase, styles.followText, styles.fontBaseBold]}>
            {' '}
            1000{' '}
          </Text>
          <Text style={[styles.fontBase, styles.followText]}> Followers </Text>
        </View>
        <View style={[styles.line]} />
        <View style={styles.followContainer}>
          <Text
            style={[styles.fontBase, styles.followText, styles.fontBaseBold]}>
            {' '}
            1200{' '}
          </Text>
          <Text style={[styles.fontBase, styles.followText]}> Following </Text>
        </View>
      </View>
    </View>
  );
}
