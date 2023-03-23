import React, {FC} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import {ICategory} from './types';

const Category: FC<ICategory> = ({image, text}) => {
  return (
    <View style={styles.category}>
      <Image source={image} style={styles.image} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default Category;
