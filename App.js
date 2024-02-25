import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { InboxStack } from './routes/InboxStack';
import { DraftStack } from './routes/DraftStack';
import { IconComponentProvider } from '@react-native-material/core';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import CustomDrawerContent from './components/CustomDrawerContent';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";


export default function App() {

  const Drawer = createDrawerNavigator();

  return (
    <>
      <IconComponentProvider IconComponent={MaterialCommunityIcons}>
        <StatusBar auto='auto' />
        <NavigationContainer>
          <Drawer.Navigator screenOptions={{ headerShown: false }}
          drawerContent={(props) => <CustomDrawerContent {...props}/>}>
            <Drawer.Screen name='Inbox' component={InboxStack}
              options={{
                title: 'Inbox',
                drawerIcon: () => {
                  <>
                    <Icon name="inbox" size={24} />
                  </>

                }
              }}
            />

            <Drawer.Screen name='Draft' component={DraftStack}
              options={{
                title: 'Draft',
                drawerIcon: () => {
                  <>
                    <Icon name="email-open" size={24} />
                  </>
                }
              }}
            />
          </Drawer.Navigator>
        </NavigationContainer>
      </IconComponentProvider>
    </>
  );
}

const styles = StyleSheet.create({

});
