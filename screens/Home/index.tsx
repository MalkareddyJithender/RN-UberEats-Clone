import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {Divider} from '@rneui/themed';

import styles from './styles';
import HeaderTabs from '../../components/Header/HeaderTabs';
// import SearchBar from '../../components/SearchBar';
import Categories from '../../components/Categories';
import Restaurants from '../../components/Restaurants';
import {categories} from '../../fixtures/categories';
import {RestaurantsType} from '../../fixtures/restaurants';
import {getRestaurantsFromYelp} from '../../api/restaurants';
import LoadingOverlay from '../../components/UI/LoadingOverlay';
import BottomTabs from '../../components/BottomTabs';

function Home(): JSX.Element {
  const [restaurants, setRestaurants] = useState<RestaurantsType>([]);

  useEffect(() => {
    async function fetchRestaurants(): Promise<void> {
      const fetchedRestaurants: RestaurantsType =
        await getRestaurantsFromYelp();
      setRestaurants(fetchedRestaurants);
    }
    fetchRestaurants();
  }, []);

  if (restaurants.length === 0) {
    return <LoadingOverlay message="Loading Restaurants ..." size="large" />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <HeaderTabs />
        {/* <SearchBar /> */}
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories categories={categories} />
        <Restaurants restaurants={restaurants} />
      </ScrollView>
      <Divider width={1.5} />
      <BottomTabs />
    </SafeAreaView>
  );
}

export default Home;
