import React, {useState, FC} from 'react';
import AuthForm from '../../components/AuthForm';
import {createUser} from '../../utils/auth';
import {setUser} from '../../store/features/auth';
import {useAppDispatch} from '../../store';

const Signup: FC = () => {
  const [userEmail, setUserEmail] = useState<string>('');
  const [userPassword, setUserPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useAppDispatch();

  async function handleSignUp() {
    try {
      const user = await createUser(userEmail, userPassword);
      dispatch(
        setUser({
          email: user.user.email,
          uid: user.user.uid,
        }),
      );
    } catch (e: any) {
      console.info('error', e.code, e.message);
      setErrorMessage(e);
    }
  }

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
      onSubmit={handleSignUp}
    />
  );
};

export default Signup;
