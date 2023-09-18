import { StyleSheet } from "react-native";
import colours from "../../constants/colours";

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    container: {
        paddingHorizontal: 15,
        paddingVertical: 50,
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginBottom: 15,
    },
    tagline: {
        color: colours.white,
        fontSize: 18,
        textAlign: 'center',
        fontWeight: '500'
    },
    title: {
        color: colours.white,
        fontSize: 50,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingHorizontal: 30,
    },
    
});

export default styles;