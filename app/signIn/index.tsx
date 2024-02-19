import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";
import { SignInStyles as styles } from "./styles";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function SignIn() {
  const [hidePass, setHidePass] = useState(true);
  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" delay={500} style={styles.header}>
        <Text style={styles.message}>Welcome back!</Text>
      </Animatable.View>
      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>Email</Text>
        <TextInput placeholder="example@gmail.com" style={styles.input} />
        <Text style={styles.title}>Password</Text>
        <View>
          <TextInput
            placeholder="* * * * *"
            autoCorrect={false}
            secureTextEntry={hidePass ? true : false}
            style={styles.input}
          />
          <TouchableOpacity
            style={styles.icon}
            onPress={() => setHidePass(!hidePass)}
          >
            {hidePass ? (
              <Ionicons name="eye" size={25} />
            ) : (
              <Ionicons name="eye-off" size={25} />
            )}
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <Link href="/register" asChild>
          <TouchableOpacity style={styles.buttonRegister}>
            <Text style={styles.registerButtonText}>
              Don't have an account? Register
            </Text>
          </TouchableOpacity>
        </Link>
      </Animatable.View>
    </View>
  );
}
