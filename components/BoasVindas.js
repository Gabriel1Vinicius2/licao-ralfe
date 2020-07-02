import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput, Button, Alert} from 'react-native';


function BoasVindas() {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [mostrarMensagem, setMostrarMensagem] = useState(false);

    const mostrarBemVindo = () => {
        if(nome == "" || sobrenome == "") {
            Alert.alert("Preencha seu nome e sobrenome!");
            setMostrarMensagem(false);
        } else {
            setMostrarMensagem(true);
        }
    }

    const limpar = () => {
        setNome("");
        setSobrenome("");
        setMostrarMensagem(false);
    }


    return (
        <View style={styles.container}>
            <Text style={styles.text}>Identifique-se</Text>
            <TextInput style={styles.input} placeholder="Nome..." onChangeText={nome => setNome(nome)}/>
            <TextInput style={styles.input} placeholder="Sobrenome..." onChangeText={sobrenome => setSobrenome(sobrenome)}/>
            <View style={styles.viewButton}>
                <Button title="OK" onPress={() => mostrarBemVindo()}/>
            </View>
            {mostrarMensagem && (
                <View>
                    <Text style={styles.message}>Seja bem-vindo {nome} {sobrenome}!!</Text>
                </View>
            )}
            <View style={styles.viewButton}>
                <Button title="Limpar" onPress={() => limpar()}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'green',
        width: 200,
        borderRadius: 5,
        padding: 10,
        margin: 10
    },
    text: {
        fontSize: 14,
        color: '#fff',
        textAlign: 'center'
    },
    input: {
        borderRadius: 7,
        marginTop: 10,
        padding: 10,
        color: '#000',
        backgroundColor: '#fff'
    },
    viewButton: {
        padding: 5
    },
    message: {
        color: 'white',
        textAlign: 'center'
    }
})
export default BoasVindas;