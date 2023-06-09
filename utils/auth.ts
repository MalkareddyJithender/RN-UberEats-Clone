import auth from '@react-native-firebase/auth';

export function getNameFromEmail(email: string): string {
  const name = email.replace('@gmail.com', '');
  return name;
}

export const createUser = async (email: string, password: string) => {
  const user = await auth().createUserWithEmailAndPassword(email, password);
  return user;
};

export const loginUser = async (email: string, password: string) => {
  const user = await auth().signInWithEmailAndPassword(email, password);
  return user;
};
