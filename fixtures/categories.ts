import {ImageSourcePropType} from 'react-native';
import Category from '../models/category';

export type ICategory = {
  text: string;
  imageUri: ImageSourcePropType;
};

export const categories: ICategory[] = [
  new Category('Pick-up', require('../assets/images/shopping-bag.png')),
  new Category('Soft Drinks', require('../assets/images/soft-drink.png')),
  new Category('Bakery Items', require('../assets/images/bread.png')),
  new Category('Fast Foods', require('../assets/images/fast-food.png')),
  new Category('Deals', require('../assets/images/deals.png')),
  new Category('Coffee & Tea', require('../assets/images/coffee.png')),
  new Category('Desserts', require('../assets/images/desserts.png')),
];
