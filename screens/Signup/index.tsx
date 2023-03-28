import React, {useState, FC} from 'react';
import {View} from 'react-native';
import {Text, TextInput} from 'react-native-paper';

const Signup: FC = () => {
  const [userEmail, setUserEmail] = useState<string>('');

  function emailChangeHandler(enteredEmail: string) {
    setUserEmail(enteredEmail);
  }

  return (
    <View>
      <Text variant="headlineLarge">Sign Up</Text>
      <TextInput
        label="E-mail"
        value={userEmail}
        onChangeText={emailChangeHandler}
      />
    </View>
  );
};

export default Signup;
