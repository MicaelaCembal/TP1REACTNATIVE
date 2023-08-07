import { StatusBar } from 'expo-status-bar';
import {  Pressable, Text, View , TouchableOpacity, Button} from 'react-native';
import  appStyles  from './styles.js';

export default function App() {
  
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [clave, setClave] = useState('');
  const handlePress = () => {
    console.log('Nombre: '+ nombre);
    console.log('Telefono: '+ telefono);
    console.log('Email: '+ email);
    console.log('Clave: '+ clave);
  };
  return (
    <View style={appStyles.container}>
      <Pressable onPress={handlePress} style={styles.button}>
      <Text style={styles.buttonText}>Pressable</Text>
    </Pressable>
    <TouchableOpacity onPress={handlePress} style={styles.button}>
      <Text style={styles.buttonText}>TouchableOpacity</Text>
    </TouchableOpacity>
    <Button title="Button"    onPress={handlePress} />
      <StatusBar style="auto " />
    </View>
  );
}


