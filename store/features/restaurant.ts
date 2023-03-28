import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IMenuItem} from '../../fixtures/menu';
import {IRestaurant} from '../../fixtures/restaurants';

interface IFoodItem extends IMenuItem {
  restaurant: IRestaurant;
  isChecked: boolean;
}

export type FoodItemsType = IFoodItem[];

interface SliceState {
  menuItems: FoodItemsType;
  restaurantName: string;
}

const initialState: SliceState = {
  menuItems: [],
  restaurantName: '',
};

const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    addFoodItem: (state, action: PayloadAction<IFoodItem>) => {
      state.menuItems.push(action.payload);
      state.restaurantName = action.payload.restaurant.name;
    },
    removeFoodItem: (state, action: PayloadAction<number>) => {
      state.menuItems = state.menuItems = state.menuItems.filter(
        item => item.id !== action.payload,
      );
    },
  },
});

console.log('slice', restaurantSlice);

// action creators
export const addFoodItem = restaurantSlice.actions.addFoodItem;
export const removeFoodItem = restaurantSlice.actions.removeFoodItem;

export default restaurantSlice.reducer;
