import {View, Text, Image} from 'react-native';
import React from 'react';
import {Divider} from '@rneui/base';

import createStyles from './styles';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import useAppTheme from '../../../../hooks/useAppTheme';

interface MenuItemProps {
  title: string;
  description: string;
  price: string;
  image: string;
}

export default function Index({
  title,
  description,
  price,
  image,
}: MenuItemProps): JSX.Element {
  const theme = useAppTheme();
  const styles = createStyles(theme);

  return (
    <View>
      <View style={styles.menuItem}>
        <BouncyCheckbox
          fillColor={theme.colors.green}
          iconStyle={styles.checkboxIcon}
          innerIconStyle={styles.checkboxInnerIcon}
        />
        <View style={styles.menuInfo}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.text}>{description}</Text>
          <Text style={styles.text}>{price}</Text>
        </View>
        <View>
          <Image
            source={{
              uri: image,
            }}
            style={styles.image}
          />
        </View>
      </View>
      <Divider width={0.5} style={styles.divider} />
    </View>
  );
}
