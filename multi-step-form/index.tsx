import * as React from 'react';
import { useReducer, useState } from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';
import { formData } from '@utils/constants/formData';
import {
    FormControls,
    InputControlText,
    Next
} from './components';
import { Title } from '@ui/atoms/Title';
import { FAB } from '@ui/molecules/fab/fab.component';

type State = {
    phone: string;
    email: string;
    password: string;
    birthdate: string;
    residence: string;
};

type PhoneAction = {
    type: 'phone';
    payload: string;
};

type EmailAction = {
    type: 'email';
    payload: string;
};

type PasswordAction = {
    type: 'password';
    payload: string;
};

type BirthdateAction = {
    type: 'birthdate';
    payload: string;
};

type ResidenceAction = {
    type: 'residence';
    payload: string;
};

type ResetAction = {
    type: 'reset';
};

type Action =
    | { type: "phone"; payload: string }
    | { type: "email"; payload: string }
    | { type: "password"; payload: string }
    | { type: "birthdate"; payload: string }
    | { type: "residence"; payload: string }
    | { type: "reset" }

const initialValue = {
    phone: '',
    email: '',
    password: '',
    birthdate: '',
    residence: ''
}

const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'phone':
            return { ...state, phone: action.payload };
        case 'email':
            return { ...state, email: action.payload };
        case 'password':
            return { ...state, password: action.payload };
        case 'birthdate':
            return { ...state, birthdate: action.payload };
        case 'residence':
            return { ...state, residence: action.payload };
        case 'reset':
            return initialValue;
        default:
        throw new Error(`Unknown action type: ${action}`);
    }
};

// TODO: Deconstruct into single forms - Date picker, location pin, text fields
// Date picker -> seperate number fields with full labels (Day, Month, Year)
// (see: https://medium.com/@h_locke/best-practice-for-date-of-birth-form-fields-91bf67bb3640)

const AuthForm = (theme: any) => {
    const [light, setTheme] = useState(theme);
    const [state, dispatch] = useReducer(reducer, initialValue);
    const [formStep, setFormStep] = useState(0);
    const maxSteps = Object.keys(state).length;
    const data = formData[formStep];
    const type: ActionType = data.name as ActionType;

    const goNext = () => setFormStep((formStep) => formStep + 1)
    const goBack = () => setFormStep((formStep) => formStep - 1);
    return (
        <View style={styles.container}>
            <FormControls
                maxSteps={maxSteps}
                currentStep={formStep}
                onBack={goBack}
            />
            <Title title={data.title} />
            <InputControlText
                size={'large'}
                name={data.name}
                accessoryLeft={data.icon}
                status='primary'
                label={data.label}
                placeholder={data.placeholder}
                value={state[type]}
                onChange={(e) =>
                    dispatch({ type: type, payload: e.nativeEvent.text})
                }
            />
            <Next onPress={goNext}/>
            {/* <FAB onPress={goNext} /> */}
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexGrow: 1,
        marginTop: 20,
        paddingLeft: 5
    },
})

export default AuthForm;