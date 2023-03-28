import React, {FC} from 'react';

import MenuItem from './MenuItem';
import {MenuType} from '../../../fixtures/menu';
import {ScrollView} from 'react-native';

interface MenuProps {
  menu: MenuType;
  hideCheckbox: boolean;
}

const Menu: FC<MenuProps> = ({menu, hideCheckbox}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {menu.map((menuItem, i) => (
        <MenuItem
          key={i}
          id={menuItem.id}
          title={menuItem.title}
          description={menuItem.description}
          price={menuItem.price}
          image={menuItem.image}
          hideCheckbox={hideCheckbox}
        />
      ))}
    </ScrollView>
  );
};

export default Menu;
