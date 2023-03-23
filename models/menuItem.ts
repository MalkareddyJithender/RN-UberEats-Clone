export default class MenuItem {
  title: string;
  description: string;
  price: string;
  image: string;

  constructor(
    title: string,
    description: string,
    price: string,
    image: string,
  ) {
    this.title = title;
    this.description = description;
    this.price = price;
    this.image = image;
  }
}
