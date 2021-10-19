import React from 'react'
import { View,ScrollView,TouchableOpacity, Text,Button } from 'react-native'

const Mode = ({ navigation: { navigate } }) => {
    return (
        <ScrollView style={{display:"flex",alignContent:"center" }}>
            
       <View style={{display:"flex",alignItems:"center",paddingTop:30 }}>

        <TouchableOpacity
         onPress={() => navigate("Challenge-Target")}

        >
        <View style={{marginTop:50}}
        >
        <Text
        style={{height:200,width:200,color:"white",backgroundColor:"tomato",paddingTop:80,paddingHorizontal:20,fontSize:20,fontWeight:"900",textAlign:"center",borderRadius:200/2}}
        >
           Unlimited Over
        </Text>
        </View>
        </TouchableOpacity>
     
        <TouchableOpacity
         
        onPress={() => navigate("Challenge-Over")}

        >
        <View style={{marginTop:50}}
        >
        <Text
        style={{height:200,width:200,color:"white",backgroundColor:"teal",paddingTop:80,paddingHorizontal:20,fontSize:20,fontWeight:"900",textAlign:"center",borderRadius:200/2}}
        >
           Limited Over
        </Text>
        </View>
        </TouchableOpacity>
        </View>
     
    </ScrollView>
    )
}

export default Mode
