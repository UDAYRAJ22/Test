import React, {useState} from 'react'
import {View, ActivityIndicator, ToastAndroid, TextInput, StyleSheet, TouchableOpacity, FlatList} from 'react-native'
import Header from '../components/Header'
import {colors} from '../config/constants'
import {GiphyItemView} from '../components/GiphyItemView'
import AntDesign from 'react-native-vector-icons/AntDesign'
import {firebase} from '@react-native-firebase/database'

const Home = (props) =>{
    const [search, setSearch] = useState("")
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [favData, setFavData] = useState([])
    
    const addToDatabase = (item) =>{
        const reference = firebase.app().database("https://test-acc6f-default-rtdb.firebaseio.com/").ref('favData')
        reference.once('value')
        .then((snap)=>{
            if(snap.numChildren()<5){
                // add new
                console.log("id ==> "+item.item.id)
                let obj = {
                    id : item.item.id,
                    title :item.item.title,
                    url : item.item.media[0].gif.url,
                    desc : item.item.content_description
                }
                reference.push(obj).then(()=>{
                    ToastAndroid.show("New item added as favorites",ToastAndroid.SHORT)    
                })
            }else{
                ToastAndroid.show("Max limit reached",ToastAndroid.SHORT)
            }
        })

    }

    const fetchData = async() =>{
        let api_key = "767ZOCXBMI1H"
        let BASE_URL = `https://g.tenor.com/v1/search?key=${api_key}&q=${search}&limit=15`
        setLoading(true)
        await fetch(BASE_URL)
        .then((res)=>{
            return res.json();
        })
        .then((result)=>{
            setData(result.results)
        })
        setLoading(false)
    }

    const addFav = (item) =>{
        addToDatabase(item)
        // let data = [...favData]
        // if(data.length==5){
        //     ToastAndroid.show("Max limit reached",ToastAndroid.SHORT)
        // }else{
        //     data.push(item)
        //     setFavData(data)
        //     ToastAndroid.show("Added to fav",ToastAndroid.SHORT)
        //     console.log("length ===> "+favData.length)
        // }
    }

    return(
        <View style={styles.mainContainer}>
            <Header title="Home" isBack={false} isFav={true} props={props}/>
            <View style={styles.container}>
                <View style={styles.searchSection}>
                    <TextInput
                        style={styles.searchTextBox}
                        keyboardType="default"
                        autoCapitalize='none'
                        placeholder='Type here giphy'
                        value={search}
                        onChangeText={(value)=>{setSearch(value)}}
                    />
                    <TouchableOpacity onPress={()=>{fetchData()}} activeOpacity={0.5} style={styles.searchButton}>
                        {
                            loading 
                            ? <ActivityIndicator animating={true} color={colors.white}/> 
                            : <AntDesign name="search1" size={20} color={colors.white}/>
                        }
                    </TouchableOpacity>
                </View>
                <View style={{flex:1}}>
                    <FlatList
                        data={data}
                        extraData={data}
                        bounces={false}
                        keyExtractor={(item, index)=>index.toString()}
                        showsVerticalScrollIndicator={false}
                        renderItem={(item, index)=><GiphyItemView item={item} index={index} props={props} favCallback={addFav}/>}
                    />
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    searchButton:{
        width:50,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:colors.primary,
        marginLeft:5,
    },
    searchTextBox:{
        width:'80%',
        borderBottomWidth:0.5,
        borderBottomColor:colors.blackLight3
    },
    searchSection:{
        flexDirection:'row',
        marginVertical:3,
        padding:4,
        alignItems:'center'
    },
    mainContainer:{
        flex:1,
    },
    container:{
        flex:1,
        paddingHorizontal:15,
    },
})
export default Home