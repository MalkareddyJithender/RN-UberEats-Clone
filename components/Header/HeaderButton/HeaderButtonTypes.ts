import React from 'react';

export interface ButtonProps {
  children: string;
  activeTab: string;
  setActiveTab?: React.Dispatch<React.SetStateAction<string>>;
}
