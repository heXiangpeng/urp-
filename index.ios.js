/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  TouchableHighlight,
  Image,
  TextInput,
   StatusBarIOS,
    NavigatorIOS,
   View
} from 'react-native';

var Mianroute = require('./mianroute');

// 设置状态栏: 参数1为白色字体，2为黑色字体
StatusBarIOS.setStyle(1);


class AwesomeProject extends Component {


  
  render() {
    return (
        <Mianroute />
    );
  }
}

const styles = StyleSheet.create({


});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
