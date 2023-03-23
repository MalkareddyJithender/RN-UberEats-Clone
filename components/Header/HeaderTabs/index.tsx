import React, {useState} from 'react';
import {View} from 'react-native';

import HeaderButton from '../HeaderButton';
import {Tabs} from './constants';
import styles from './styles';

function HeaderTabs(): JSX.Element {
  const [activeTab, setActiveTab] = useState<string>('Delivery');

  return (
    <View style={styles.tabsContainer}>
      <HeaderButton activeTab={activeTab} setActiveTab={setActiveTab}>
        {Tabs.DELIVERY}
      </HeaderButton>
      <HeaderButton activeTab={activeTab} setActiveTab={setActiveTab}>
        {Tabs.PICKUP}
      </HeaderButton>
    </View>
  );
}

export default HeaderTabs;
