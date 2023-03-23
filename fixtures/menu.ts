import MenuItem from '../models/menuItem';

interface IMenuItem {
  title: string;
  description: string;
  price: string;
  image: string;
}

export type MenuType = IMenuItem[];

const menu: MenuType = [
  new MenuItem(
    'Lasagna',
    'With butter lettuce, tomato and sauce bechamel',
    '$13.50',
    'https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg',
  ),
  new MenuItem(
    'Tandoori Chicken',
    'Amazing Indian dish with tenderloin chicken off the sizzles 🔥',
    '$19.20',
    'https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg',
  ),
  new MenuItem(
    'Chilaquiles',
    'Chilaquiles with cheese and sauce. A delicious mexican dish 🇲🇽',
    '$14.50',
    'https://i2.wp.com/chilipeppermadness.com/wp-content/uploads/2020/11/Chilaquales-Recipe-Chilaquiles-Rojos-1.jpg',
  ),
  new MenuItem(
    'Chicken Caesar Salad',
    'One can never go wrong with a chicken caesar salad. Healthy option with greens and proteins!',
    '$21.50',
    'https://images.themodernproper.com/billowy-turkey/production/posts/2019/Easy-italian-salad-recipe-10.jpg?w=1200&h=1200&q=82&fm=jpg&fit=crop&fp-x=0.5&fp-y=0.5&dm=1614096227&s=c0f63a30cef3334d97f9ecad14be51da',
  ),
  new MenuItem(
    'Lasagna',
    'With butter lettuce, tomato and sauce bechamel',
    '$13.50',
    'https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg',
  ),
  new MenuItem(
    'Jithu',
    'With butter lettuce, tomato and sauce bechamel',
    '$13.50',
    'https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg',
  ),
  new MenuItem(
    'Mallika',
    'With butter lettuce, tomato and sauce bechamel',
    '$13.50',
    'https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg',
  ),
];

export default menu;
