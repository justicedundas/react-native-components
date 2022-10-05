import { StyleSheet } from 'react-native';
import { Colors, Outlines, Sizing } from 'ui/theme/styles';

export const styles = StyleSheet.create({
    form: {
        flex:1,
        height: 140,
        flexGrow: 1,
    },
    container: {
        height: 44,
        marginTop: 10,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: Colors.neutral.s200,
        borderBottomWidth: Outlines.borderWidth.hairline
    },
    input: {
        fontFamily: 'SairaCondensed-Regular',
        flex: 1,
        flexGrow: 1,
        fontSize: 24
    },
    icon: {
        paddingRight: 24,
    },
    label: {
        fontFamily: 'SairaCondensed-Regular',
        fontSize: 32,
        lineHeight: 40
    },
    dynlabel: {
        fontFamily: 'SairaCondensed-Regular',
        fontSize: 32,
        lineHeight: 40,
        color: Colors.primary.brand
    }
});

