export default class MenuItem {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;

  constructor(
    id: number,
    title: string,
    description: string,
    price: string,
    image: string,
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.image = image;
  }
}
