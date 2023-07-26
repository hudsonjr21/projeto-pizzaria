import React, { useState, useContext } from 'react';
import { 
  View, 
  Text, 
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native'

import { AuthContext } from '../../contexts/AuthContext'
import { Ionicons } from '@expo/vector-icons'

export default function SignIn(){
  
  const { signIn, loadingAuth} = useContext(AuthContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [hidePass, setHidePass] = useState(true)

  async function handleLogin(){

    if(email === '' || password === ''){
      return;
    }

    await signIn({ email, password })
    
  }


  return(
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/logo.png')}
      />

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Digite seu email"   
          style={styles.input}     
          placeholderTextColor="#F0F0F0"
          value={email}
          onChangeText={setEmail}
        />

      <View style={styles.passwordInputContainer}>
          <TextInput
            placeholder="Sua senha"
            style={styles.passwordInput}
            placeholderTextColor="#F0F0F0"
            secureTextEntry={hidePass}
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity
            style={styles.inputIcon}
            onPress={() => setHidePass(!hidePass)}
          >
            {hidePass ? (
              <Ionicons name="eye" color="#FFF" size={25} />
            ) : (
              <Ionicons name="eye-off" color="#FFF" size={25} />
            )}
          </TouchableOpacity>
      </View>     

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          { loadingAuth ? (
            <ActivityIndicator size={25} color="#FFF"/>
          ) : (
            <Text style={styles.buttonText}>Acessar</Text>
          )}
        </TouchableOpacity>   
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: '#1d1d2e'
  },
  logo:{
    marginBottom: 18
  },
  inputContainer:{
    width: '85%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 32,
    paddingHorizontal: 14,
  },
  input:{
    width: '85%',
    height: 40,
    backgroundColor: '#101026',
    marginBottom: 12,
    borderRadius: 4,
    paddingHorizontal: 8,
    color: '#FFF'
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '85%',
    marginBottom: 12,
    borderRadius: 4,
    paddingHorizontal: 8,
    backgroundColor: '#101026', 
  },
  passwordInput: {
    flex: 1,
    height: 40,
    color: '#FFF',
  },
  inputIcon:{
    width: '15%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button:{
    width: '85%',
    height: 40,
    backgroundColor: '#3fffa3',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText:{
   fontSize: 18, 
   fontWeight: 'bold',
   color: '#101026'
  }
});