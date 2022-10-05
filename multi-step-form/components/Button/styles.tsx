import {
    StyleSheet
} from 'react-native';
import { Buttons } from 'ui/theme/styles';

const styles = StyleSheet.create({
    back: {
        ...Buttons.circular.secondary
    },
    next: {
        ...Buttons.circular.primary,
        alignSelf: 'flex-end',
        marginBottom: 36
    },
    welcome: {
        ...Buttons.bar.primary,
    },
});

export default styles;