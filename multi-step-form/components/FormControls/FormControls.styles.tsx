import { StyleSheet } from 'react-native';
import { Buttons } from 'ui/theme/styles';

export const styles = StyleSheet.create({
    controls: {
        paddingVertical: 5
    },
    back: {
        ...Buttons.circular.secondary
    }
})