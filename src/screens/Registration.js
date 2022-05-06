import React, {useState} from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import { colors, fontSize } from '../config/constants'
import AntDesign from 'react-native-vector-icons/AntDesign'
import InputTextBox from '../components/InputTextBox'

export const Registration = (props) =>{
    const [userName, setUserName]=useState("")
    const [emailId, setEmailId]=useState("")
    const [mobile, setMobile]=useState("")
    const [password, setPassword]=useState("")
    const [city, setCity]=useState("")
    const [isAccepted, setIsAccepted]=useState(false)
    const [userType, setUserType]=useState()

    return(
        <View style={styles.mainContainer}>
            <View style={{padding:10, marginBottom:20}}>
                <AntDesign name='arrowleft' size={20} color={colors.blackLight2} onPress={()=>{props.navigation.goBack()}}/>
            </View>
            <View style={styles.container}>
                <Text style={{fontSize:fontSize.size20, fontWeight:'bold', textAlign:'center'}}>Registration</Text>
                <InputTextBox
                    value={userName}
                    onChange={(value)=>setUserName(value)}
                    placeholderText="Username"
                    isPassword={false}
                />
                <InputTextBox
                    value={emailId}
                    onChange={(value)=>setEmailId(value)}
                    placeholderText="Email Id"
                    isPassword={false}
                />
                <InputTextBox
                    value={mobile}
                    onChange={(value)=>setMobile(value)}
                    placeholderText="Mobile"
                    isPassword={false}
                    isNumeric={true}
                />
                <InputTextBox
                    value={password}
                    onChange={(value)=>setPassword(value)}
                    placeholderText="Password"
                    isPassword={true}
                    isNumeric={false}
                />
                <InputTextBox
                    value={city}
                    onChange={(value)=>setCity(value)}
                    placeholderText="City"
                    isPassword={false}
                    isNumeric={false}
                
                />
                <View style={{flexDirection:'row', justifyContent:'center', marginVertical:15, justifyContent:"space-evenly"}}>
                    <View>
                        <TouchableOpacity style={{flexDirection:'row'}} onPress={()=>{setUserType('user')}}>
                            <View style={{borderWidth:0.5, width:20, height:20, borderRadius:10, backgroundColor: userType=='user'? colors.blackLight3 :'white'}}>
                                { userType=="user" &&(<AntDesign name='check' size={20} color={colors.blackLight2}/>) }
                            </View>
                            <Text style={{marginLeft:5}}>User</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={{flexDirection:'row'}} onPress={()=>{setUserType('service')}}>
                            <View style={{borderWidth:0.5, width:20, height:20, borderRadius:10, backgroundColor: userType=='service'? colors.blackLight3 :'white'}}>
                                { userType=="service" &&(<AntDesign name='check' size={20} color={colors.blackLight2}/>) }
                            </View>
                            <Text style={{marginLeft:5}}>Service provider</Text>
                        </TouchableOpacity>
                    </View>

                </View>

                <View style={{flexDirection:'row', justifyContent:'center', marginTop:18}}>
                    <TouchableOpacity
                        onPress={()=>{
                            setIsAccepted(!isAccepted)
                        }} 
                        style={{width:20, height:20, marginRight:10, borderWidth:0.5, borderColor:colors.blackLight3, borderRadius:5,}}>
                        {isAccepted && (<AntDesign name='check' size={20} color={colors.blackLight2}/>) }
                    </TouchableOpacity>
                    <Text>I accept all the <Text style={{color:'blue'}}>Terms and conditions</Text></Text>
                </View>
                <TouchableOpacity style={styles.buttonView}>
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:colors.white
    },
    container:{
        paddingHorizontal:15,
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
export default Registration