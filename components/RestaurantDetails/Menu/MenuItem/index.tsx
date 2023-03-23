import {View, Text, Image} from 'react-native';
import React from 'react';
import {Divider} from '@rneui/base';
import styles from './styles';

interface MenuItemProps {
  title: string;
  description: string;
  price: string;
  image: string;
}

export default function index({
  title,
  description,
  price,
  image,
}: MenuItemProps): JSX.Element {
  return (
    <View>
      <View style={styles.menuItem}>
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
