import React from 'react';
import {IMD3Theme} from '../../../App';

interface IButton {
  children: string;
  activeTab: string;
}

export interface ICreateStyles extends IButton {
  theme: IMD3Theme;
}
export interface ButtonProps extends IButton {
  setActiveTab?: React.Dispatch<React.SetStateAction<string>>;
}
