import { StyleSheet } from 'react-native';
import colours from '../../constants/colours';

const styles = StyleSheet.create({
    item: {
        fontSize: 12,
        color: colours.green,
        fontWeight: 'bold',
        padding: 8,
        paddingHorizontal: 12,
        textTransform: 'capitalize',
    },
    selectedItem: {
        color: colours.white
    },
    itemContainer: {
        marginRight: 8,
        marginBottom: 14,
    },
    selectedItemContainer: {
        backgroundColor: colours.green,
        borderRadius: 10,
    }
});

export default styles;