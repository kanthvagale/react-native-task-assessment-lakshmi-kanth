import Snackbar from 'react-native-snackbar';
import NetInfo from '@react-native-community/netinfo';
import { ToastProps } from '../constants/types';

NetInfo.configure({
  reachabilityUrl: 'https://www.google.co/',
  reachabilityTest: async response => response.status === 200,
  reachabilityLongTimeout: 60 * 1000, // 60s
  reachabilityShortTimeout: 5 * 1000, // 5s
  reachabilityRequestTimeout: 15 * 1000, // 15s
});

export async function checkInternetConnection() {
  const { isConnected } = await NetInfo.fetch();
  return isConnected;
}

export const showToast = ({
  title = '',
  type = 'success',
  visibilityTime = 4000,
}: ToastProps) => {
  Snackbar.show({
    text: title,
    backgroundColor: type === 'success' ? '#44B461' : 'red',
    textColor: '#FFFFFF',
    duration: visibilityTime,
  });
};
