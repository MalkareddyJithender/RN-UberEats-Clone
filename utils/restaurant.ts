import {CategoriesType} from '../fixtures/restaurants';
import {FoodItemsType} from '../store/features/restaurant';

export const getFormattedCategories = (categories: CategoriesType): string => {
  const categoriesNew = categories.map(category => category.title).join(' . ');
  return categoriesNew;
};

export const getFoodItemsTotal = (foodItems: FoodItemsType) => {
  const prices = foodItems.map(item => Number(item.price.replace('$', '')));
  const total = prices.reduce((prev, cur) => prev + cur, 0);
  const priceTotal = total.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  return priceTotal;
};
