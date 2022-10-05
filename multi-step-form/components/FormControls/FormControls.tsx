/**
 * @component FormControl
 */

import * as React from 'react';
import { 
    Pressable,
    View
} from 'react-native';
import { IconBack } from '../IconBack/IconBack';
import { styles } from './FormControls.styles';

export interface IProps {
    maxSteps?: number;
    currentStep: number;
    onBack: (e: any) => void;
};

export const FormControls = (props: IProps): JSX.Element => {
    const { onBack, maxSteps, currentStep } = props;
    return (
        <>
            <Pressable style={styles.back} onPress={onBack}>
                <IconBack
                    color={ currentStep === 1 ? '#000' : '#000' }
                />
            </Pressable>
        </>
    )
}