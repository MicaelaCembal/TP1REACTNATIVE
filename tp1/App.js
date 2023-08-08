import { StatusBar } from 'expo-status-bar';
import { Pressable, Text, View, TouchableOpacity, Button, SafeAreaView, TextInput } from 'react-native';
import appStyles from './styles.js';
import { useState } from 'react'; 

export default function App() {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [clave, setClave] = useState('');

  const handlePress = () => {
    console.log('Nombre: ' + nombre);
    console.log('Telefono: ' + telefono);
    console.log('Email: ' + email);
    console.log('Clave: ' + clave);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={appStyles.container}>
        <Text style={appStyles.textLabel}>Carga tus datos</Text>

        <View style={appStyles.inputContainer}>
          <Text style={appStyles.inputLabel}>Nombre</Text>
          <TextInput
            style={appStyles.input}
            placeholder="ingrese..."
            onChangeText={setNombre}
            value={nombre}
          />
        </View>
        <Text> {'\n'} </Text>

        <View style={appStyles.inputContainer}>
          <Text style={appStyles.inputLabel}>Telefono</Text>
          <TextInput
            style={appStyles.input}
            placeholder="ingrese..."
            onChangeText={setTelefono}
            value={telefono}
          />
        </View>
        <Text> {'\n'}</Text>
        <View style={appStyles.inputContainer}>
          <Text style={appStyles.inputLabel}>Email</Text>
          <TextInput
            style={appStyles.input}
            placeholder="ingrese..."
            onChangeText={setEmail}
            value={email}
          />
        </View>
        <Text> {'\n'} </Text>
        <View style={appStyles.inputContainer}>
          <Text style={appStyles.inputLabel}>Clave</Text>
          <TextInput
            style={appStyles.input}
            placeholder="ingrese..."
            onChangeText={setClave}
            value={clave}
          />
        </View>
        <Text> {'\n'} </Text>
        <View style={appStyles.posBotton}>

        <View  style={{flex: 2}}> 
        <Pressable onPress={handlePress} style={appStyles.buttonText}>
          <Text >Pressable</Text>
        </Pressable>
        </View>


        <View  style={{flex: 2}}> 
        <TouchableOpacity onPress={handlePress} style={appStyles.buttonText}>
          <Text >TouchableOpacity</Text>
        </TouchableOpacity>
        </View>

        
        <View style={{ flex: 2 }}>
            <View style={appStyles.buttonText}>
              <Button title="Button" onPress={handlePress} />
            </View>
          </View>






          
        </View>




        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}
