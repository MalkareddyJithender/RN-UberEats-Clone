import React, {useState} from 'react';
import AuthForm from '../../components/AuthForm';

export default function SignIn(): JSX.Element {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  return (
    <AuthForm
      isLogin={true}
      title="Sign In"
      userEmail={userEmail}
      userPassword={userPassword}
      setUserEmail={setUserEmail}
      setUserPassword={setUserPassword}
      buttonLabel="Sign In"
      onSubmit={() =>{}}
    />
  );
}
