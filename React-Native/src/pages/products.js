import React from 'react';

import { WebView } from 'react-native';

const Product = ({ navigation }) => (
  // Browser
  <WebView source={{uri: navigatio.state.params.product.url}}/>
);

Product.navigationOptions = ({ navigation }) => ({
  title: navigation.state.params.product.title,
});

export default Product;
