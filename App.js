import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import MainScreen from './screens/MainScreen';

export default function App() {
  const [screen, setScreen] = useState(true);

  const modificarHandle = () => {
    if (screen) {
      setScreen(false);
    } else {
      setScreen(true);
    }
  };
  return (
    <View style={styles.container}>
        {screen ? (
          <MainScreen>
            <Text>Miau</Text>
          </MainScreen>
        ) : (
          <Text>Segunda tela</Text>
        )}
        <View>
          <Button title='Miau' onPress={modificarHandle}/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
