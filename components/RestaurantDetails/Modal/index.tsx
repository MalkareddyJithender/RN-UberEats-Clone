import React, {Dispatch, SetStateAction, useState} from 'react';
import {ScrollView, View, Text, Modal} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store';

import useAppTheme from '../../../hooks/useAppTheme';
import OrderItems from './OrderItems';
import SubTotal from './SubTotal';
import Button from '../../UI/Button';
import createStyles from './styles';

interface ModalProps {
  modalVisible: boolean;
  cartTotal: string;
  closeModal: () => void;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

export default function Index({
  modalVisible,
  closeModal,
  cartTotal,
  setLoading,
}: ModalProps): JSX.Element {
  const theme = useAppTheme();
  const styles = createStyles(theme);
  const route = useRoute();
  const navigation = useNavigation();
  const restaurant = route.params?.restaurant;
  const selectedItems = useSelector(
    (state: RootState) => state.restaurant.menuItems,
  );

  function checkoutHandler() {
    closeModal();
    setLoading(true);
    // redirects to order placed screen after 3 seconds of loading
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('OrderPlaced', {restaurant});
    }, 3000);
  }

  const checkoutModalContent: JSX.Element = (
    <View style={styles.modalContainer}>
      <View style={styles.modalCheckoutContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.reataurantTitle}>{restaurant.name}</Text>
          <OrderItems items={selectedItems} />
          <SubTotal text="Subtotal" price={cartTotal} />
          <View style={styles.checkoutBtnContainer}>
            <Button
              text="Checkout"
              price={cartTotal}
              onPress={checkoutHandler}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
  return (
    <Modal
      visible={modalVisible}
      animationType="fade"
      transparent={true}
      onRequestClose={closeModal}>
      {checkoutModalContent}
    </Modal>
  );
}
