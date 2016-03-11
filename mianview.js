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
  ListView,
  NavigatorIOS,
  View
} from 'react-native';

var messageList = React.createClass ( {


  getInitialState() {
      var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    }),
    }
  },

  componentDidMount() {
     this.getlist();


  },

  async getlist(){

 console.log("获取的数据"+this.props.pwd);
    try{
  let response = await  fetch("http://202.203.209.96/v5api/api/Result/", {
   method: "GET",
   headers: {
     "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",

     "Authorization":this.props.pwd +" "+this.props.user,
     "Referer": "http://202.203.209.96/v5/"
     }

   });

      let responsejson = await response.json();
      console.log("返回的数据："+responsejson);
      var grade = {};
    for(var ele in responsejson.TeachClassList){
      var objec = new Array();
      objec[1] = responsejson.TeachClassList[ele].CourseName;
      objec[2] = responsejson.TeachClassList[ele].TeacherName;
      objec[3] = responsejson.ResultList[ele].Result+"分";
      //  console.log(responsejson.TeachClassList[ele].CourseName);

      grade[ele] = objec;

     }

      console.log("生成的长度："+JSON.stringify(grade));


     this.setState({
      //  dataSource:""
       dataSource: this.state.dataSource.cloneWithRows(grade),

       });


 }catch(error) {

 }
  },

  render() {

    var a = (

      <ListView
       dataSource={this.state.dataSource}
       renderRow={this.renderMovie}
       style={styles.listView}
     />
    );
    return a;
  },

  renderMovie(movie) {
  return (
    <View style={styles.container}>

      <View style={styles.rightContainer}>

        <Text style={styles.title}>{movie[1]}</Text>

        <Text style={styles.title}>{movie[2]}</Text>

      </View>
      <Text style={styles.grade}>{movie[3]}</Text>
    </View>
  );
  }
});


var Mianview = React.createClass({
  render: function() {
    return (
      <NavigatorIOS

    style={ styles.container }
        initialRoute={
          {
            title: '成绩',
            component: messageList,
            passProps:{
                 user:this.props.user,
                 pwd:this.props.pwd
             }
          }
        }
        />
    );
  }
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',

    backgroundColor: '#fff',
  },
  rightContainer: {
    flex: 2,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    marginLeft:10,

  },
  grade:{
     marginRight:20,
  },
  year: {

  },
  thumbnail: {
    width: 53,
    height: 81,
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
});

module.exports = Mianview;
