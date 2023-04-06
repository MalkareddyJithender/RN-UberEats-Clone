import React, {useState} from 'react';
import AuthForm from '../../components/AuthForm';
import {getNameFromEmail, loginUser} from '../../utils/auth';
import {useAppDispatch} from '../../store';
import {setUser} from '../../store/features/auth';

export default function SignIn(): JSX.Element {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const dispatch = useAppDispatch();

  async function handleSignIn() {
    try {
      await loginUser(userEmail, userPassword);
      // const userName = getNameFromEmail(user.email!);

      // dispatch(
      //   setUser({
      //     email: user.email,
      //     displayName: userName,
      //     uid: user.uid,
      //   }),
      // );
    } catch (e) {
      console.log('error', e);
    }
  }

  return (
    <AuthForm
      isLogin={true}
      title="Sign In"
      userEmail={userEmail}
      userPassword={userPassword}
      setUserEmail={setUserEmail}
      setUserPassword={setUserPassword}
      buttonLabel="Sign In"
      onSubmit={handleSignIn}
    />
  );
}
