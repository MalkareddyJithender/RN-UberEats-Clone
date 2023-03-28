import React from 'react';
import {View, Text} from 'react-native';
import {Divider} from 'react-native-paper';

import useAppTheme from '../../../../../hooks/useAppTheme';
import createStyles from './styles';

interface OrderItemProps {
  name: string;
  price: string;
}

export default function Index({name, price}: OrderItemProps): JSX.Element {
  const theme = useAppTheme();
  const styles = createStyles(theme);
  return (
    <>
      <View style={styles.item}>
        <Text style={styles.itemName}>{name}</Text>
        <Text style={styles.itemPrice}>{price}</Text>
      </View>
      <Divider bold />
    </>
  );
}
