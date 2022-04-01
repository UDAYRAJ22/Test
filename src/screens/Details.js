import React from 'react'
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native'
import Header from '../components/Header'
import { colors, fontSize } from '../config/constants'

const Details = (props) =>{
    const {item, favCallback } = props.route.params
    console.log(JSON.stringify(props))
    const addToFav = (item) =>{
        // favCallback(item)
        props.navigation.goBack()
    }

    return(
        <View style={styles.mainContainer}>
            <Header title="Details" isBack={true} isFav={false} props={props}/>
            <View style={styles.container}>
                <Image
                    source={{uri: item.item.media[0].gif.url}}
                    style={styles.itemImage}
                />
                <Text style={styles.title}>{item.item.title=="" ? item.item.id : item.item.title}</Text>
                <Text style={styles.desc}>{item.item.content_description}</Text>
                <TouchableOpacity onPress={()=>{addToFav()}} activeOpacity={0.7} style={styles.buttonView}>
                    <Text style={styles.buttonText}>Add to Fav</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    buttonView:{
        padding:7,
        marginTop:15,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:colors.primary
    },
    buttonText:{
        fontSize:fontSize.size18,
        color:colors.white,
    },
    desc:{
        fontSize:fontSize.size14,
        color:colors.blackLight2,
        textAlign:'justify'
    },
    title:{
        fontSize:fontSize.size20,
        color:colors.primary,
        textAlign:'center',
        marginVertical:5,
    },
    itemImage:{
        width:200,
        height:200,
        resizeMode:'cover',
        alignSelf:'center'
    },
    mainContainer:{
        flex:1,
    },
    container:{
        flex:1,
        paddingHorizontal:15,
    },
})
export default Details