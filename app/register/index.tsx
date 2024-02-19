import { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";
import { SignInStyles as styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import MaskInput, { Masks } from "react-native-mask-input";

export default function Register() {
  const [hidePass, setHidePass] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" delay={500} style={styles.header}>
        <Text style={styles.message}>Create an account</Text>
      </Animatable.View>
      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <View>
          <Text style={styles.title}>Email</Text>
          <TextInput
            placeholder="example@gmail.com"
            style={styles.input}
            autoCorrect={false}
            keyboardType="email-address"
          />
          <Text style={styles.title}>Password</Text>
          <View style={styles.password}>
            <TextInput
              placeholder="* * * * *"
              autoCorrect={false}
              secureTextEntry={hidePass ? true : false}
              style={styles.passwordInput}
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
          <Text style={styles.title}>Phone number</Text>
          <MaskInput
            style={styles.input}
            mask={Masks.BRL_PHONE}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="numeric"
          />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}
