import React, {FC} from 'react';

import MenuItem from './MenuItem';
import {MenuType} from '../../../fixtures/menu';
import {ScrollView} from 'react-native';

interface MenuProps {
  menu: MenuType;
}

const Menu: FC<MenuProps> = ({menu}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {menu.map((menuItem, i) => (
        <MenuItem
          key={i}
          title={menuItem.title}
          description={menuItem.description}
          price={menuItem.price}
          image={menuItem.image}
        />
      ))}
    </ScrollView>
  );
};

export default Menu;
