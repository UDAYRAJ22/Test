import React, {useState, useEffect} from 'react'
import {View,TextInput, StyleSheet} from 'react-native'
import { colors, fontSize } from '../config/constants'

export const InputTextBox = ({value, onChange, isPassword, placeholderText, isNumeric}) =>{
    const [inputValue, setInputValue] = useState("")

    useEffect(()=>{
        setInputValue(value)
    },[value])

    const onTextChangeHandler = (value) =>{
        setInputValue(value)
        onChange(value)
    }

    return(
        <View style={styles.textInputBox}>
            <TextInput
                value={value}
                onChangeText={(value)=>{onTextChangeHandler(value)}}
                style={styles.textInput}
                placeholder={placeholderText?placeholderText:""}
                keyboardType={isNumeric?"number-pad":"email-address"}
                maxLength={20}
                autoCorrect={false}
                multiline={false}
                autoCapitalize="none"
                secureTextEntry={true}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    textInputBox :{
        width:'100%',
        marginVertical:10,
        borderWidth:0.5,
        borderRadius:25,
        borderColor:colors.blackLight3,
    },
    textInput:{
        marginLeft:20,
        paddingLeft:15,
        color:colors.blackLight2,
        fontSize:fontSize.size14
    },
})
export default InputTextBox