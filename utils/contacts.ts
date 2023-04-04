import Contacts from "react-native-contacts";
import { PermissionsAndroid } from "react-native";

export async function getAllContacts() {
  try {
    const permissionResponse = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
      {
        title: 'Contacts',
        message: 'This app would like to view your contacts.',
        buttonPositive: 'Please accept bare mortal',
      },
    );
    if (permissionResponse === 'granted') {
      const contacts = await Contacts.getAll();
      console.log('contacts info', contacts);
    }
  } catch (e) {
    console.log('contacts error', e);
  }
}
