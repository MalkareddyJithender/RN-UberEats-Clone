import React, {FC} from 'react';
import {View, ScrollView} from 'react-native';

import Category from './Category';
import styles from './styles';
import {CategoriesProps} from './types';

const Categories: FC<CategoriesProps> = ({categories}) => {
  return (
    <View style={styles.categories}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category, i) => (
          <Category image={category.imageUri} text={category.text} key={i} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;
