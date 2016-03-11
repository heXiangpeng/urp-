/**
 * Created by Bruce on Mon Jan 25 2016 23:28:33 GMT+0800 (CST).
 */

'use strict';



var Login = require('./login');


import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  Navigator,
  View,
} from 'react-native';


var Mianroute = React.createClass ({
  render: function() {
    return (
      <Navigator
        initialRoute = {{name:"login", component: Login}}
        renderScene={(route, navigator) => {
          let Component = route.component;
          return <Component {...route.params} navigator={navigator} />
        }} />
    )
  }
});

module.exports = Mianroute;
