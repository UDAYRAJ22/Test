import React from 'react'
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {colors, fontSize} from '../config/constants'
import AntDesign from 'react-native-vector-icons/AntDesign'

export const GiphyItemView = ({item, index, props, favCallback}) =>{
    return(
        <View style={styles.itemView}>
            <TouchableOpacity activeOpacity={0.7} onPress={()=>{props.navigation.navigate('Details', {item:item, index:index})}}>
                <Image
                    source={{uri: item.item.media[0].gif.url}}
                    style={styles.itemPicture}
                />
            </TouchableOpacity>
            <View style={{marginLeft:10, width:'75%'}}>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Text style={styles.itemTitle}>{item.item.title=="" ? item.item.id : item.item.title}</Text>
                    <TouchableOpacity 
                        onPress={()=>{
                            if(favCallback){favCallback(item, index)}
                        }} 
                        activeOpacity={0.7} style={{justifyContent:'center', alignItems:'center'}}>
                        <AntDesign name="hearto" size={20} color={colors.primary}/>
                    </TouchableOpacity>
                </View>
                <Text style={styles.itemDesc} numberOfLines={2}>{item.item.content_description}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    itemView:{
        flexDirection:'row',
        borderBottomWidth:0.5,
        borderBottomColor:colors.blackLight3,
        padding:5,
        marginVertical:10,
        alignItems:'center',
    },
    itemTitle:{
        fontSize:fontSize.size18,
        color:colors.primary,
        textTransform:'capitalize',
    },
    itemDesc:{
        fontSize:fontSize.size14,
        color:colors.blackLight3,
    },
    itemPicture:{
        width:60,
        height:60,
        resizeMode:'cover'
    },
})