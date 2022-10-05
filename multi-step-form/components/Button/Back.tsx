import React from 'react';
import {
    Pressable
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Sizing, Colors } from 'ui/theme/styles';
import styles from './styles';

type IBackBtn = {
    goBack: () => void;
}

const Back = ({ goBack }: IBackBtn)  => {
    return (
        <Pressable onPress={goBack} style={styles.back}>
            <Icon name="arrow-back" size={Sizing.icons.x50} color={Colors.neutral.black} />
        </Pressable>
    )
};

export default Back;