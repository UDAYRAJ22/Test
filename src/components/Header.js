import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {colors, fontSize} from '../config/constants'
import AntDesign from 'react-native-vector-icons/AntDesign'

const Header = ({title, isBack, isFav, props}) =>{

    const goBack = () =>{
        props.navigation.goBack()
    }
    return(
        <View style={styles.headerBar}>
            <View>
                {isBack && (<AntDesign name="arrowleft" size={20} color={colors.white} onPress={()=>{goBack()}}/>)}
            </View>
            <Text style={styles.headerTitle}>{title}</Text>
            <View>
                {isFav && (<AntDesign name="hearto" size={20} color={colors.white} onPress={()=>{
                    props.navigation.navigate('Favorites')
                }}/>)}
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    headerBar :{
        flexDirection:'row',
        height: 45,
        maxHeight:45,
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:colors.primary,
        paddingHorizontal:10
    },
    headerTitle:{
        fontSize:fontSize.size18,
        color:colors.white,
        textTransform:'capitalize'
    },
})
export default Header