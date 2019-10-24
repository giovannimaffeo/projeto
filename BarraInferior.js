/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

export default function Inferior(props){
    return(
        
        <View style={styles.barraInferior}>

            <View style={styles.nomeAplicativo}>

                <Text>
                    {props.nomeAplicativo}
                </Text>

            </View>

            <View style={style.botaoPost}>

                <button>Postar</button>

            </View>

        </View>

    );
}

const styles = StyleSheet.create({

    barraInferior: {
      
      flex: 1,
      flexDirection: "row",
    
    },
  
    nomeAplicativo: {
        //Ver fonte
      width: "70%",
  
    },
  
    botaoPost: {
  
      width: "30%",
  
    },

})
  
































































































































































