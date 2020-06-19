import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';



export default class VideoSection extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={{ uri: "https://i.ytimg.com/vi/XzJ1WnFTVds/maxresdefault.jpg" }} style={styles.imgInVideo} />
                <View style={styles.bottomCOntainer}>

                    <Image source={{ uri: 'https://www.eguardtech.com/wp-content/uploads/2018/08/Network-Profile.png' }} style={styles.profile} />
                    <View style={styles.videodetails}>
                        <Text styles={styles.tumbnailtxt}>lorem ipsum text lorem ipsum text lorem  </Text>
                    </View>
                    <TouchableOpacity onPress={() => alert("HI")}>
                        <Entypo name="dots-three-vertical" size={25} />
                    </TouchableOpacity>

                </View>
            </View>

        );

    }
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#000000',
    },
    imgInVideo: {
        // flexDirection: 'row',
        // padding: 15,
        width: '100%',
        height: 200,
    },

    bottomCOntainer: {
        marginVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    profile: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginHorizontal: 2,
    },
    tumbnailtxt: {
        fontSize: 16,
        // alignItems: 'flex-start',
        color: '#3c3c3c'
    },
    videodetails: {
        paddingHorizontal: 15,
        flex: 1
    }
});
