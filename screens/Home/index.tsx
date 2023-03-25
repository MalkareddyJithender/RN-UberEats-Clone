import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';

import HeaderTabs from '../../components/Header/HeaderTabs';
// import SearchBar from '../../components/SearchBar';
import Categories from '../../components/Categories';
import Restaurants from '../../components/Restaurants';
import {categories} from '../../fixtures/categories';
import {RestaurantsType} from '../../fixtures/restaurants';
import {getRestaurantsFromYelp} from '../../api/restaurants';
import LoadingOverlay from '../../components/UI/LoadingOverlay';
import useAppTheme from '../../hooks/useAppTheme';
import createStyles from './styles';

function Home(): JSX.Element {
  const theme = useAppTheme();
  const styles = createStyles(theme);
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
    </SafeAreaView>
  );
}

export default Home;
