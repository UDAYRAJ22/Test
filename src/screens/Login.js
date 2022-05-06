import React, {useState} from 'react'
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native'
import InputTextBox from '../components/InputTextBox'
import { colors, fontSize } from '../config/constants'
import AntDesign from 'react-native-vector-icons/AntDesign'

export const Login = (props) =>{
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")

    return(
        <View style={styles.mainContainer}>
            <Image
                source={require('../images/logo.png')}
                style={styles.logo}
            />
            <View style={{flexDirection:'row', alignItems:"center"}}>
                <AntDesign name='mail' size={20} color={colors.blackLight3} style={styles.icon}/>
                <InputTextBox
                    value={email}
                    onChange={(value)=>setEmail(value)}
                    placeholderText="Email Id"
                    isPassword={false}
                />
            </View>

            <View style={{flexDirection:'row', alignItems:"center"}}>
                <AntDesign name='lock' size={20} color={colors.blackLight3} style={styles.icon}/>
                <InputTextBox
                    value={password}
                    onChange={(value)=>setPassword(value)}
                    placeholderText="Password"
                    isPassword={true}
                />
            </View>
            <Text style={{color:'blue', textAlign:'right', marginVertical:3}}>Forgot Password?</Text>
            <TouchableOpacity style={styles.buttonView}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <View style={{flexDirection:'row', justifyContent:'space-between',}}>
                <TouchableOpacity style={[styles.buttonView,{width:'40%', backgroundColor:'#3b5998'}]}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.buttonView,{width:'40%', backgroundColor:colors.blackLight2}]}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>

            <View style={{flexDirection:'row', justifyContent:'center', marginTop:'25%'}}>
                <Text>Not yet a member? </Text>
                <Text onPress={()=>{props.navigation.navigate('Registration')}} style={{color:'blue'}}>Sign up </Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        paddingHorizontal:15,
        backgroundColor:colors.white
    },
    logo:{
        resizeMode:'cover',
        alignSelf:'center',
        marginTop:'20%',
        marginBottom:20,
    },
    icon:{
        position:'absolute',
        left:10,
    },
    buttonView:{
        backgroundColor:colors.primary,
        padding:10,
        borderRadius:20,
        marginVertical:20,
        justifyContent:'center',
        alignItems:'center',
    },
    buttonText:{
        color:colors.white,
        fontSize:fontSize.size16,
        textTransform:'capitalize'
    },
})
export default Login