import { Header } from "@/components/header";
import { router } from "expo-router";
import { useState } from "react";
import { Text, TextInput, SafeAreaView, TouchableOpacity, StyleSheet } from "react-native";

export default function Registro(){
    const[nome, setNome] = useState("")
    const[email, setEmail] = useState("")
    const[pass, setPass] = useState("")
    const[repass, setRepass] = useState("")

    const onPress = () => {
        router.push("/")
    }

    return(
        <SafeAreaView>

            <Header image={require("../assets/images/react-logo.png")}/>

            <Text style={styles.text}>Registro</Text>

            <Text style={styles.text}>Nome</Text>
            <TextInput onChangeText={setNome} value={nome} placeholder="Digite o seu nome" keyboardType="default"></TextInput>
            
            <Text style={styles.text}>Email</Text>
            <TextInput onChangeText={setEmail} value={email} placeholder="Digite o seu e-mail" keyboardType="email-address"></TextInput>
            
            <Text style={styles.text}>Senha</Text>
            <TextInput onChangeText={setPass} value={pass} placeholder="Digite a sua senha" keyboardType="visible-password"></TextInput>
            
            <Text style={styles.text}>Confirmar Senha</Text>
            <TextInput onChangeText={setRepass} value={repass} placeholder="Confirme sua senha" keyboardType="visible-password"></TextInput>

            <TouchableOpacity onPress={onPress}>
                <Text style={styles.text}>Criar</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        paddingBottom: 15
    }
})