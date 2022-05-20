import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, StackScreenProps} from '@react-navigation/stack';
import React, {useState, useCallback} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  LayoutAnimation,
} from 'react-native';
import {Button} from 'react-native-elements';
const Stack = createStackNavigator();

export const Screen1 = ({navigation, route}) => {
  return (
    <View style={styles.screens}>
      <Button
        style={styles.navButtons}
        title="Click me to go to screen 2!"
        onPress={() => navigation.navigate('Screen2')}
      />
    </View>
  );
};

export const Screen2 = ({navigation, route}) => {
  return (
    <View style={styles.screens}>
      <Button
        style={styles.navButtons}
        title="Click me to go to screen 1!"
        onPress={() => navigation.navigate('Screen1')}
      />
      <Button
        style={styles.navButtons}
        title="Click me to go to screen 3!"
        onPress={() => navigation.navigate('Screen3')}
      />
    </View>
  );
};

export const Screen3 = ({navigation, route}) => {
  return (
    <View style={styles.screens}>
      <Button
        style={styles.navButtons}
        title="Click me to go to screen 1!"
        onPress={() => navigation.navigate('Screen1')}
      />
      <Button
        style={styles.navButtons}
        title="Click me to go to screen 2!"
        onPress={() => navigation.navigate('Screen2')}
      />
    </View>
  );
};

const App = () => {
  const headerButton = (
    <Button
      title={'Do I work?'}
      style={styles.doIWorkButton}
      onPress={() => alert('I do!')}
    />
  );
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: () => headerButton,
          headerMode: 'screen',
          headerStyle: {height: 500},
        }}
        detachInactiveScreens={false}>
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
        <Stack.Screen name="Screen3" component={Screen3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  screens: {flex: 1, alignItems: 'center'},
  navButtons: {height: 100, width: 250, color: 'white'},
  doIWorkButton: {},
});

export default App;
