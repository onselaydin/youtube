import React from 'react';
import { Text, View,Image,Dimensions,TouchableOpacity } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';

const MiniCard =(props)=>{
    const navigation = useNavigation();
    const {colors} = useTheme();
    const textColor = colors.iconColor
    return(
        <TouchableOpacity
        onPress={()=>
            //console.log(props)
            navigation.navigate("videoplayer",{videoId:props.videoId,title:props.title})
        }
        >

        
        <View style={{flexDirection:"row", margin:10, marginTop:0}}>
            <Image
                source={{uri:`https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`}}
                style={{
                    width:"45%",
                    height:100
                }}
            />
            <View style={{paddingLeft:7}}>
                <Text style={{
                    fontSize:17,
                    width:Dimensions.get("screen").width/2,
                    color:textColor
                }}
                ellipsizeMode="tail"
                numberOfLines={3}
                >{props.title}</Text>
                <Text style={{fontSize:12,color:textColor}}>{props.channel}</Text>
            </View>
        </View>
        </TouchableOpacity>
    )
}
export default MiniCard;