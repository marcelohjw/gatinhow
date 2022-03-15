import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function App() {
  
  const [chose, setChose] = useState();

  const modificarHandle = () => {
    const numero = (Math.floor(Math.random()*(8-1+1)+1));
    console.log('Gato número ' + numero);
    setChose(numero);
  };

  if (chose == 1) {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('./assets/cats/cat-cafe-pet.jpg')} 
        />
        <View>
          <Button 
            title='Miar' 
            onPress={modificarHandle}
            style={styles.imgButton}
          />
        </View>
      </View>
    );
  };

  if (chose == 2) {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('./assets/cats/ac03988834695cc2f6eb623a74143355--green-eyes-bengal-cats.jpg')} 
        />
        <View>
          <Button title='Miar' onPress={modificarHandle}/>
        </View>
      </View>
    );
  };

  if (chose == 3) {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('./assets/cats/1800x1200_cat_relaxing_on_patio_other.jpg')} 
        />
        <View>
          <Button title='Miar' onPress={modificarHandle}/>
        </View>
      </View>
    );
  };

  if (chose == 4) {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('./assets/cats/cat-4027635_1280.jpg')} 
        />
        <View>
          <Button title='Miar' onPress={modificarHandle}/>
        </View>
      </View>
    );
  };

  if (chose == 5) {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('./assets/cats/cat-4664535_640.jpg')} 
        />
        <View>
          <Button title='Miar' onPress={modificarHandle}/>
        </View>
      </View>
    );
  };

  if (chose == 6) {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('./assets/cats/cat-5496162_640.jpg')} 
        />
        <View>
          <Button title='Miar' onPress={modificarHandle}/>
        </View>
      </View>
    );
  };

  if (chose == 7) {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('./assets/cats/cat-5657148__340.jpg')} 
        />
        <View>
          <Button title='Miar' onPress={modificarHandle}/>
        </View>
      </View>
    );
  };

  if (chose == 8) {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          resizeMode='contain'
          source={{uri: 'https://www.plazahoteis.com.br/wp-content/uploads/2019/07/gatinho-filhote-plaza-hoteis-jul19.jpg'}} 
        />
        <View>
          <Button title='Miar' onPress={modificarHandle}/>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
        <Text>Chame o gato!</Text>
        <View>
          <Button title='Miar' onPress={modificarHandle}/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    resizeMode: 'contain',
    width: 400,
    height: 400
  },
  imageContainer: {
    padding: 20
  }
});
