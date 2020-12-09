import React from 'react';
import { Text, View } from 'react-native';
import { useNavigation,useTheme } from '@react-navigation/native';
import { AntDesign,Ionicons,MaterialIcons } from '@expo/vector-icons';
import Constant from 'expo-constants';
//import { color } from 'react-native-reanimated';
//reducers veri atamak için kullanılır.
import {useDispatch,useSelector} from 'react-redux';

export default function Header(){
    
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const {colors} = useTheme();
    const currentTheme = useSelector(state=>{
        return state.myDarkMode
    })
    const mycolor = colors.iconColor;//"#212121";

    
    return (
        <View style={{
            marginTop:Constant.statusBarHeight,
            height:45,
            backgroundColor:colors.headerColor,
            flexDirection:"row",
            justifyContent:"space-between",
            elevation:8
        }}>
            <View style={{
                flexDirection:"row",
                margin:5
            }}>
            <AntDesign name="youtube" size={32} color="red"/>
            <Text style={{fontSize:22,marginLeft:5,
                color:mycolor,
                fontWeight:"bold"}}>Youtube</Text>
            </View>
            <View style={{
                flexDirection:"row",
                justifyContent:"space-around", 
                width:150,
                margin:5 }}>
                <Ionicons name="md-videocam" size={32} color={mycolor}/>
                <Ionicons name="md-search" size={32} color={mycolor}
                onPress={()=>navigation.navigate("search")}
                />
                <MaterialIcons name="account-circle" size={32} color={mycolor}
                    onPress={()=>dispatch({type:"change_theme",payload:!currentTheme})}
                />
            </View>
        </View>

    );
}
