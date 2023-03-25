import {CategoriesType} from '../fixtures/restaurants';

export const getFormattedCategories = (categories: CategoriesType): string => {
  const categoriesNew = categories.map(category => category.title).join(' . ');
  return categoriesNew;
};
