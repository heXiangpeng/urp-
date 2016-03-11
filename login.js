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
  ListView,
   StatusBarIOS,
  NavigatorIOS,
   View
} from 'react-native';

var Mianview = require('./mianview');

// 设置状态栏: 参数1为白色字体，2为黑色字体
StatusBarIOS.setStyle(1);


class Login extends Component {


  constructor(props) {
   super(props);
   this.state = {
     movies: null,

     TempGuid:null,
    username:'',
     passwd:'',
     code:null,
     islogin:null,
     access_token:'',
     token_type:'',
     role:'',
     refresh_token:'',
   };
 }
 componentDidMount() {
   this.fetchData();
 }
 fetchData() {
   fetch("http://202.203.209.96/v5api/api/GetLoginCaptchaInfo/1fd46374-4ac7-472a-98a8-70c4129a338b")
     .then((response) => response.json())
     .then((responseData) => {
       console.log('ImgGuid:: ' + responseData.ImgGuid);
       this.setState({
         movies:responseData.ImgGuid,
         TempGuid:responseData.TempGuid,

       });
     })
     .done({

     });
 }

async getToken(){

  try {
    let response = await fetch("http://202.203.209.96/v5api/OAuth/Token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      "Referer": "http://202.203.209.96/v5/"
    },
    body: "grant_type=password&username="+this.state.username+"&password="+this.state.passwd+"%7C"+this.state.code+"*"+this.state.TempGuid+"&client_id=ynumisSite"
  });

    let responsejson = await response.json();

if(responsejson.role){
    this.props.navigator.push({
   component: Mianview,
   title: "djaj",
   navigationBarHidden: false,
   params:{
        user:responsejson.access_token,
        pwd:responsejson.token_type
    }
   })

 }
  // return responsejson;


  }catch(error) {
    // Handle error
    console.error(error);
  }





}

  onPressTitle(){


   if(this.state.username.length > 0 && this.state.passwd.length > 0 && this.state.code.length>0){
    //  console.log("用户名字："+this.state.username);
    var validPromise = this.getToken()

    // alert(validPromise.role);



   }




  }



  render() {
    return (
      <View style={styles.container}>
        <TextInput
         style={styles.userinput}
         onChangeText={(text) => this.setState({username:text})}

         onSubmitEditing={this.onPressTitle}
         placeholder='学号'

         numberOfLines={1}
         autoFocus = {true}
         textAlign='center'
        />
        <View
          style={styles.line}
        />

        <TextInput

        style={styles.passwd}
        onChangeText={(text) => this.setState({passwd:text})}
        onSubmitEditing={this.onPressTitle}
        placeholder='密码'

        numberOfLines={1}
        autoFocus = {true}
        secureTextEntry={true}
        textAlign='center'
        />

        <View
          style={styles.line}
        />
        <View  style={{flex:0,flexDirection:'column',alignItems: 'flex-end', position: 'relative'}}>

        <TextInput
          style={styles.vercode}
        placeholder='验证码'
        numberOfLines={1}
        autoFocus = {true}
        onChangeText={(text) => this.setState({code:text})}
        onSubmitEditing={this.onPressTitle}
        secureTextEntry={true}
        textAlign='center'
         />
           <Image source={{uri: 'http://202.203.209.96/vimgs/'+this.state.movies+'.png'}}
               style={styles.vercodeimg} />

        </View>

        <View
                     style={styles.style_view_commit}
                  >

                  <TouchableHighlight

                   style = {styles.highlight}
                   onPress={this.onPressTitle.bind(this)}

                  >
                   <Text style={{color:'#fff'}}>
                      登录
                   </Text>
                   </TouchableHighlight>

                 </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

    backgroundColor: '#f4f4f4',
  },
  userinput:{
    backgroundColor:'#fff',
    height:35,
  },
  line:{
    height:1,
    backgroundColor:'#f4f4f4',
  },
  passwd:{
    backgroundColor:'#fff',
    height:35,
  },
  vercode:{
    marginRight:90,
    backgroundColor:'#fff',
    height:35,


  },
  vercodeimg:{
    marginTop:-35,
 height:40,
 width:90,

  },
  highlight:{
    backgroundColor:'#000',


  },
  style_view_commit:{
  marginTop:15,
  marginLeft:10,
  marginRight:10,
  backgroundColor:'#63B8FF',
  height:35,
  borderRadius:5,
  justifyContent:'center',
 alignItems: 'center',
  },

});

module.exports = Login;
