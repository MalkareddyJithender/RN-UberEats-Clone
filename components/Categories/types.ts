import {ICategory} from '../../fixtures/categories';

export interface IStyles {
  categories: object;
}

export type CategoriesProps = {
  categories: ICategory[];
};
