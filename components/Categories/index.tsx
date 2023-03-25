import React, {FC} from 'react';
import {View, ScrollView} from 'react-native';

import useAppTheme from '../../hooks/useAppTheme';
import Category from './Category';
import {CategoriesProps} from './types';
import createStyles from './styles';

const Categories: FC<CategoriesProps> = ({categories}) => {
  const theme = useAppTheme();
  const styles = createStyles(theme);

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
