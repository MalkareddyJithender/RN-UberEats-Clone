import React, {useState} from 'react';
import AuthForm from '../../components/AuthForm';
import {loginUser} from '../../utils/auth';
import {useAppDispatch} from '../../store';
import {setUser} from '../../store/features/auth';

export default function SignIn(): JSX.Element {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const dispatch = useAppDispatch();

  async function handleSignIn() {
    try {
      const {user} = await loginUser(userEmail, userPassword);
      dispatch(
        setUser({
          email: user.email,
          uid: user.uid,
        }),
      );
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
