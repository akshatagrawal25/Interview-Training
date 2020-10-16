import 'react-native-gesture-handler';
import React, { useState } from "react";
import { Button, DrawerLayoutAndroid, Text, StyleSheet, View, SafeAreaView } from "react-native";
import { Octicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from "./HomeScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContent, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import AboutScreen from "./AboutScreen";
import TrainingScreen from './TrainingScreen';
import { HelpScreen } from './HelpScreen';
import { SettingScreen } from './SettingScreen';
import { NotificationScreen } from './NotificationScreen';

const App = () => {

  const navigationView = (
    <View style={styles.navigationContainer}>
      <View style={styles.app__container}>
        <Text style={styles.drawer__login}>Login</Text>

      </View>
      <View style={styles.app__sidebar}>
        <View style={styles.app__Icon}>
          <Octicons name="info" size={30} color="gray" />
          <Text style={styles.app__sideText}>About</Text>
        </View>
        <View style={styles.app__Icon}>
          <AntDesign name="dropbox" size={30} color="gray" />
          <Text style={styles.app__sideText}>Training Resources</Text>
        </View>
        <View style={styles.app__Icon}>
          <MaterialCommunityIcons name="chat-outline" size={30} color="gray" />
          <Text style={styles.app__sideText}>Help</Text>
        </View>
      </View>
      <View style={styles.app__footer}>
        <View style={styles.app__Icon}>
          <Feather name="settings" size={30} color="gray" />
          <Text style={styles.app__sideText}>App Settings</Text>
        </View>
        <View style={styles.app__Icon}>
          <Ionicons name="ios-notifications-outline" size={30} color="gray" />
          <Text style={styles.app__sideText}>Notifications</Text>
        </View>
      </View>
    </View>
  );

  function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem label="@copyright2020" style={styles.drawer_footer} labelStyle={{ color: "lightgray", textAlign: "center" }} />
      </DrawerContentScrollView>
    );
  }
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>


      <Drawer.Navigator initialRouteName="Home" drawerPosition="right" drawerType="back" hideStatusBar="true" drawerStyle={styles.sidebar} drawerContentOptions={{ itemStyle: { padding: 10, marginBottom: 10 } }} drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={({ route }) => ({
          drawerIcon: ({ color, size }) => {
            const icons = {
              Home: 'home',
              About: 'information',
              Settings: 'settings',
              Help: 'chat-outline',
              Training: 'dropbox',
              Notifications: 'notification-clear-all',
            };

            return (
              <MaterialCommunityIcons
                name={icons[route.name]}
                color={color}
                size={size}
              />
            );
          },
        })}
      >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="About" component={AboutScreen} />
        <Drawer.Screen name="Training" component={TrainingScreen} />
        <Drawer.Screen name="Help" component={HelpScreen} />
        <Drawer.Screen name="Settings" component={SettingScreen} />
        <Drawer.Screen name="Notifications" component={NotificationScreen} />
      </Drawer.Navigator>
    </NavigationContainer >

  );
};

const styles = StyleSheet.create({
  app__Icon: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
  },
  app__container: {
    backgroundColor: "#f0f5f1",
    marginBottom: 20,
  },
  app__sidebar: {

    borderBottomWidth: 1,
    borderBottomColor: "gray",
    paddingBottom: 100,
  },
  app__sideText: {
    padding: 30,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
    backgroundColor: "#ecf0f1",
    padding: 8
  },
  drawer__login: {
    padding: 15,
    margin: 10,
    fontSize: 15,
  },
  drawer_footer: {
    bottom: -10,
  },
  navigationContainer: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#fff",
    padding: 8
  },
  sidebar: {
    marginTop: 50,
  },
});

export default App;
