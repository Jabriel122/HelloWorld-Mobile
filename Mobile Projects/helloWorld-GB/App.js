import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, Button} from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World</Text>

      <TextInput
        style={styles.input}
        defaultValue='Exemplo de Input'
      />

      <Button title='Exemplo de Botão' style={styles.btn}/>

      <Image source={require("./src/assets/Pingu.png")} style={styles.image}></Image>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5F52F7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 40,
    color: '#EDC9FA',
    fontWeight: "500",
  },
  input: {
    width: '90%',
    height: 40,
    borderWidth: 1,
    borderColor: '#9552F7',
    backgroundColor: '#5279F7',
    padding: 10 ,
    borderRadius: 12,
  },
  image:{
    width:'80%'
  },
  btn:{
    width: '80%',
    height:40,
    borderColor: '#9552F7',
    pedding: 10,
    borderRadius: 12
  }
});
