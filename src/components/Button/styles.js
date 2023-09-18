import { StyleSheet } from "react-native";
import colours from "../../constants/colours";

const styles = StyleSheet.create({
    container: {
        backgroundColor: colours.green,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        alignSelf: 'center',
        borderRadius: 10,
        padding: 15,
        marginTop: 20,
    },
    text: {
        color: colours.white,
        fontSize: 16,
        fontWeight: '500'
    },
    icon: {
        width: 24,
        height: 24,
        marginLeft: 16,
    }
});

export default styles;