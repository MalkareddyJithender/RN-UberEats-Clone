import {Dispatch, SetStateAction} from 'react';

export interface ModalProps {
  modalVisible: boolean;
  cartTotal: string;
  closeModal: () => void;
  setLoading: Dispatch<SetStateAction<boolean>>;
}
