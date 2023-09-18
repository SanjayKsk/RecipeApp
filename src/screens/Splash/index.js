import React from "react";
import { Image, View, Text, ImageBackground } from "react-native";
import Button from "../../components/Button";
import styles from "./styles";




const Splash = ({ navigation }) => {
  
  return (
    <ImageBackground style={styles.background} source={require('../../../assets/splash.png')} >
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../../assets/bwicon.png')} />
            <Text style={styles.tagline}>Recipes at your fingertips</Text>

            
        </View>

        <View style ={styles.container}>
            <Text style={styles.title}>Get</Text>
            <Text style={styles.title}>Cooking</Text>
            <Button onPress={() => navigation.navigate('Home')}>View Recipes </Button>
        </View>
    </ImageBackground>
  )
}

export  default React.memo(Splash);