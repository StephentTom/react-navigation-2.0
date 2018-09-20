/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
   StyleSheet,
   Text,
   View,
   TouchableOpacity,
} from 'react-native';
import NavItem from '../../common/NavItem'

export default class Login extends Component {

   static navigationOptions = (navigation)=>(
       {
          headerTitle: '登 录',
       }
   );

   _onPress = ()=>{
     this.props.navigation.navigate('Register');
   };

   render() {
      return (
          <View style={styles.container}>
             <TouchableOpacity
                 onPress={this._onPress}
             >
                <Text style={styles.welcome}>
                   Welcome to React Native -- Login!
                </Text>
             </TouchableOpacity>
             <Text style={styles.instructions}>
                To get started, edit App.js
             </Text>
          </View>
      );
   }

   componentDidMount() {
      this.props.navigation.setParams({
         isModal: true,
      })
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
   },
   welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
   },
});
