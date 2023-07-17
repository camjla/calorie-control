import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Routes from './routes';

const Main: React.FC = () => {
  return (
    <View >
           <StatusBar style="auto" />
           <Routes />
    </View>
  );
}

export default Main;