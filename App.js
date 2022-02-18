import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    <View style={styles.user}>
    <View style={styles.avatar}></View>
    <View>
    <Text>Jane Doe</Text>
    </View>
    
    
    </View>
     
    
    <TextInput placeholder='Name' styles={styles.input}/>
    <TextInput placeholder='Email' styles={styles.input}/>
    <TextInput placeholder='Password' styles={styles.input}/>
    <Button title="save changes" color="#7047EB" style={styles.button}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    border:"1px solid black",
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar:{
    width:"100px",
    height:"100px",
    borderRadius:"50%",
    backgroundColor:"#7047EB",
    margin:"0 20px"
  },
  user:{
    display:"flex",
    alignItems:"center",
    justifyContent:"space-between",
    flexDirection:"row",
    

  

  },
  input:{
    border:"1px solid black",
    paddingBottom:"10px"
  },
  button:{
    padding:"2rem",
    borderRadius:"10px"


  }
});
