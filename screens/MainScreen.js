import Reacy from 'react';
import { StyleSheet, Image, View } from 'react-native';
import Card from '../components/Card';

const MainScreen = props => {
    return (
        <View style={styles.full}>
            <Card>
                <View style={styles.imageContainer}>
                        <Image style={styles.image} source={require('../assets/cats/cat-5496162_640.jpg')} />
                    </View>
            </Card>
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%'
    },
    imageContainer: {
        width: '100%',
        height: '60%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden',
        paddingHorizontal: 10
    },
    full: {
        width: '80%'
    }
});

export default MainScreen;