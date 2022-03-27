import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { Audio } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  const [sound, setSound] = useState(false);
  const [chose, setChose] = useState();
  const [playing, setPlaying] = useState(false);
  const [mute, setMute] = useState(false);

  const choseCat = () => {
    const numero = (Math.floor(Math.random() * (10 - 1 + 1) + 1));
    return numero;
  };

  const modificarHandle = () => {
    numero = choseCat();
    console.log('Gato número ' + numero);
    intervalo = (numero * 1000 + 5000);
    console.log((intervalo / 1000), 'segundos.');
    setChose(numero);
    if (!playing) {
      playSound();
      setPlaying(true);
    }

    setTimeout(modificarHandle, intervalo);

  };

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require('./assets/meow.mp3')
    );
    setSound(sound);

    await sound.playAsync();
  }

  const onMuteHandler = () => {
    if (mute) {
      setMute(false);
    } else {
      setMute(true);
    }
  };

  useEffect(() => {
    return sound
      ? () => {
        sound.unloadAsync();
      }
      : undefined;
  }, [sound]);

  if (chose == 1) {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: 'https://blackwhitepet.com.br/resources/img/racas-de-gato-pelo-curto-brasileiro.jpg' }}
        />
        <View style={styles.soundIcon}>
          <Ionicons 
            name={mute ?  "ios-volume-mute" : "ios-volume-high" }
            size={24} 
            color="black" 
            onPress={onMuteHandler}
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
          source={{ uri: 'https://www.dicaspetz.com.br/wp-content/uploads/2020/02/gato-com-heterocromia-pet.jpg' }}
        />
        <View style={styles.soundIcon}>
          <Ionicons 
              name={mute ?  "ios-volume-mute" : "ios-volume-high" }
              size={24} 
              color="black" 
              onPress={onMuteHandler}
            />
        </View>
      </View>
    );
  };

  if (chose == 3) {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: 'https://soestima.com.br/wp-content/uploads/2020/09/Untitled-design-2-1.jpg' }}
        />
        <View style={styles.soundIcon}>
          <Ionicons 
              name={mute ?  "ios-volume-mute" : "ios-volume-high" }
              size={24} 
              color="black" 
              onPress={onMuteHandler}
            />
        </View>
      </View>
    );
  };

  if (chose == 4) {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: 'https://www.dicaspetz.com.br/wp-content/uploads/2020/02/gato-com-heterocromia.jpg' }}
        />
        <View style={styles.soundIcon}>
          <Ionicons 
              name={mute ?  "ios-volume-mute" : "ios-volume-high" }
              size={24} 
              color="black" 
              onPress={onMuteHandler}
            />
        </View>
      </View>
    );
  };

  if (chose == 5) {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: 'https://i.ytimg.com/vi/rPXkM63ZO-8/maxresdefault.jpg' }}
        />
        <View style={styles.soundIcon}>
          <Ionicons 
              name={mute ?  "ios-volume-mute" : "ios-volume-high" }
              size={24} 
              color="black" 
              onPress={onMuteHandler}
            />
        </View>
      </View>
    );
  };

  if (chose == 6) {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: 'https://www.azpetshop.com.br/blog/wp-content/uploads/2021/03/quantos-anos-vive-um-gato-805x452.jpg' }}
        />
        <View style={styles.soundIcon}>
          <Ionicons 
              name={mute ?  "ios-volume-mute" : "ios-volume-high" }
              size={24} 
              color="black" 
              onPress={onMuteHandler}
            />
        </View>
      </View>
    );
  };

  if (chose == 7) {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: 'https://saude.abril.com.br/wp-content/uploads/2021/03/bichos-foto-vauvau-Getty-Images.png' }}
        />
        <View style={styles.soundIcon}>
          <Ionicons 
              name={mute ?  "ios-volume-mute" : "ios-volume-high" }
              size={24} 
              color="black" 
              onPress={onMuteHandler}
            />
        </View>
      </View>
    );
  };

  if (chose == 8) {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: 'https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70' }}
        />
        <View style={styles.soundIcon}>
          <Ionicons 
              name={mute ?  "ios-volume-mute" : "ios-volume-high" }
              size={24} 
              color="black" 
              onPress={onMuteHandler}
            />
        </View>
      </View>
    );
  };

  if (chose == 9) {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: 'https://meupet.elanco.com/sites/g/files/adhwdz661/files/styles/paragraph_image/public/2020-07/gato_de_retrato_olhando_para_a_camera.jpg?itok=iXWiqVkY' }}
        />
        <View style={styles.soundIcon}>
          <Ionicons 
              name={mute ?  "ios-volume-mute" : "ios-volume-high" }
              size={24} 
              color="black" 
              onPress={onMuteHandler}
            />
        </View>
      </View>
    );
  };

  if (chose == 10) {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: 'https://static.poder360.com.br/2020/10/gato-animal-covid-19-scaled.jpg' }}
        />
        <View style={styles.soundIcon}>
          <Ionicons 
              name={mute ?  "ios-volume-mute" : "ios-volume-high" }
              size={24} 
              color="black" 
              onPress={onMuteHandler}
            />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text>Chame o gato!</Text>
      <View>
        <Button title='Miar' onPress={modificarHandle} />
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
  },
  soundIcon: {
    marginTop: '50%'
  }
});
