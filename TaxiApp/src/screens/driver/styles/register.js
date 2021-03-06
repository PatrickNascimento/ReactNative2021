import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
   wrapper: {
      flex: 1,
   },
   container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
   },
   socialMedia: {
      flexDirection: 'row',
      width: 300,
      height: 80,
      backgroundColor: '#ffffff',
      marginTop: -50,
      alignItems: 'center',
      justifyContent: 'center',
   },
   facebookButton: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#42A5F5',
      height: 50,
      width: 153,
      marginLeft: 13,
   },
   googlePlusButton: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ffffff',
      height: 50,
      width: 153,
      borderColor: '#dcdcdc',
      borderWidth: 0.4,
      marginLeft: 2,
   },
   RideNames: {
      flexDirection: 'row',
      width: 350,
      height: 80,
      backgroundColor: '#ffffff',
   },
   textInputfn: {
      alignSelf: 'stretch',
      width: 170,
      paddingLeft: 40,
      backgroundColor: '#fff',
   },
   textInputln: {
      alignSelf: 'stretch',
      width: 170,
      paddingLeft: 34,
      marginLeft: 5,
      backgroundColor: '#fff',
   },
   textInputEmail: {
      alignSelf: 'stretch',
      width: 350,
      paddingLeft: 40,
      paddingBottom: 25,
      marginLeft: 5,
      backgroundColor: '#fff',
   },
   textInputMobile: {
      width: 300,
      paddingBottom: 25,
      marginLeft: 5,
      backgroundColor: '#fff',
   },
   NextButton: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#42A5F5',
      height: 50,
      width: 350,
      marginTop: 15,
   },
});
