import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Text } from 'react-native';
import * as Animatable from 'react-native-animatable';

handleViewRef = (ref) => (view = ref)
animate = () => {
    view.bounceInUp(2000)
};

onAnimate = () => {
    view.bounceOutDown(2000);
}

const Snackbar = (props) => {
    return (
        <View style={styles.container}>

            <View style={{

            }}>
                <TouchableOpacity
                    onPress={animate
                    }
                    style={{
                        height: 40,
                        backgroundColor: 'white',
                        elevation: 5,
                        alignItems: 'center',
                        justifyContent: 'center',

                    }}
                >
                    <Text style={{ fontSize: 15, fontFamily: 'serif' }}>
                        {'Show snackbar'}
                    </Text>
                </TouchableOpacity>
            </View>


            <Animatable.View
                style={{
                    height: 40,
                    backgroundColor: 'yellow',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}
                ref={handleViewRef}>
                <Text style={{ fontSize: 14, fontFamily: 'serif', marginLeft: 10 }}>
                    {props.text}
                </Text>

                <TouchableOpacity onPress={onAnimate}>
                    <Text style={{ marginRight: 10, fontWeight: 'bold' }}>
                        {'Undo'}
                    </Text>
                </TouchableOpacity>


            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between'
    },

});
export default Snackbar;