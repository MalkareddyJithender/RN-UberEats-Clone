import React, {useState, FC} from 'react';
import AuthForm from '../../components/AuthForm';

const Signup: FC = () => {
  const [userEmail, setUserEmail] = useState<string>('');
  const [userPassword, setUserPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState('');
  return (
    <AuthForm
      isLogin={false}
      title="Sign Up"
      userEmail={userEmail}
      setUserEmail={setUserEmail}
      userPassword={userPassword}
      setUserPassword={setUserPassword}
      confirmPassword={confirmPassword}
      setConfirmPassword={setConfirmPassword}
      buttonLabel="Sign Up"
    />
  );
};

export default Signup;
