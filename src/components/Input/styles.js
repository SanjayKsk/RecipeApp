import { StyleSheet } from "react-native";
import colours from "../../constants/colours";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colours.lightGrey,
        padding: 10,
        marginVertical:16,
        
    },
    input: {
        color: colours.black,
        fontSize: 14,
        flex: 1,
    },
    icon: {
        width: 15,
        height: 15,
        marginRight: 16,
    }
});

export default styles;