import { Text, TouchableOpacity, View } from "react-native";
import * as Animatable from "react-native-animatable";
import { WelcomeStyles as styles } from "./styles";
import { Link } from "expo-router";

export default function Welcome() {
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Animatable.Image
          source={require("../assets/images/logo.png")}
          style={{ width: "100%" }}
          resizeMode="contain"
          animation="flipInY"
        />
      </View>
      <Animatable.View
        animation="fadeInUp"
        delay={1000}
        style={styles.containerForm}
      >
        <Text style={styles.title}>
          Find the nearest pharmacy or one on guard duty.
        </Text>
        <Text style={styles.text}>Stay covered anytime, anywhere</Text>
        <Link href="/login" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </Link>
      </Animatable.View>
    </View>
  );
}
