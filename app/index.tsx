import { Link, router } from "expo-router";
import { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    const onPress = () => {
        router.push("/(tabs)")
    }

    return(
        <SafeAreaView>
            <Text>Login</Text>
            <Text>Email</Text>
            <TextInput style={styles.input} onChangeText={setEmail} value={email} placeholder="Digite o seu e-mail" keyboardType="email-address"/>
            <Text>Senha</Text>
            <TextInput style={styles.input} onChangeText={setPass} value={pass} placeholder="Digite sua senha" keyboardType="default"></TextInput>

            <View>
                <TouchableOpacity style={styles.btn} onPress={onPress}>
                    <Text style={styles.btnText}>Entrar</Text>
                </TouchableOpacity>

                <View>
                    <Link href={"/register"}>Cadastrar novo usuário</Link>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    input: {
        paddingHorizontal: 10,
        paddingVertical: 3,
        backgroundColor: '#090909',
        color: '#ffffff'
    },

    btn: {
        backgroundColor: "#090909"
    },

    btnText: {
        color: "green"
    }
})