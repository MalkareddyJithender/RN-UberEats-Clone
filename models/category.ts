import {ImageSourcePropType} from 'react-native';

class Category {
  text: string;
  imageUri: ImageSourcePropType;

  constructor(text: string, imageUri: ImageSourcePropType) {
    this.text = text;
    this.imageUri = imageUri;
  }
}

export default Category;
