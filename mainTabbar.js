/**
 * 导航栏
 *
 */
'use strict';
import React,{
AppRegistry,
 StyleSheet,
 Text,
 View,
 TabBarIOS
}from 'react-native';


var MainTabbar = React.createClass({
 getInitialState(){
   return{
     selectedTab: 'Grade'
   }
 },

 render:function(){
   <TabBarIOS>
     <TabBarIOS.Item
      title="成绩"
      icon={}
      selected={ this.state.selectedTab === 'Grade' }
     >

     <View style={ styles.pageView }>
           <Text>Face Mash</Text>
         </View>
     </TabBarIOS.Item>

     <TabBarIOS.Item
      title="课表"
      icon={}
      selected={ this.state.selectedTab === 'classGradue' }
     >

     <View style={ styles.pageView }>
           <Text>Face Mash</Text>
         </View>
     </TabBarIOS.Item>

     <TabBarIOS.Item
      title="个人"
      icon={}
      selected={ this.state.selectedTab === 'person' }
     >

     <View style={ styles.pageView }>
           <Text>Face Mash</Text>
         </View>
     </TabBarIOS.Item>

   </TabBarIOS>


 },

});


var styles = StyleSheet.create({
pageview:{
  backgroundColor:'#fff',
  flex:1,
},
});

module.exports = MainTabbar
