import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
  Image,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";

export default function SignIn({ navigation }) {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1 }} colors={[Colors.blue, Colors.bluewhite]}>
      <View style={{ flex: 1, marginHorizontal: 22, marginTop: 50 }}>
        <View style={{ marginVertical: 22 }}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
              marginVertical: 12,
              color: Colors.black,
            }}
          >
            Hey Welcome back !
          </Text>

          <Text
            style={{
              fontSize: 16,
              color: Colors.black,
            }}
          >
            Hello again you have been missed !
          </Text>
        </View>       

        <View style={{ marginBottom: 12, marginTop: 50 }}>
          <Text style={styles.label}>Email address</Text>
          <View style={styles.inputField}>
            <TextInput
              placeholder="Enter your email address"
              placeholderTextColor={Colors.black}
              keyboardType="email-address"
              style={{
                width: "100%",
                textAlign: "left",
              }}
            />
          </View>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.inputField}>
            <TextInput
              placeholder="Enter your password"
              placeholderTextColor={Colors.black}
              secureTextEntry={isPasswordShown}
              style={{
                width: "100%",
                textAlign: "left",
              }}
            />

            <TouchableOpacity
              onPress={() => setIsPasswordShown(!isPasswordShown)}
              style={{
                position: "absolute",
                right: 12,
              }}
            >
              {isPasswordShown == true ? (
                <Ionicons name="eye-off" size={24} color={Colors.black} />
              ) : (
                <Ionicons name="eye" size={24} color={Colors.black} />
              )}
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginHorizontal: 8,
            marginBottom: 15,
          }}
        >
          <Checkbox
            style={{ marginRight: 8 }}
            value={isChecked}
            onValueChange={setIsChecked}
            color={isChecked ? Colors.bluewhite : undefined}
          />

          <Text>Remember Me</Text>
        </View>
        <View style={{ Colors }}>
          <Button title="log in" filled />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 20,
          }}
        >
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: Colors.grey,
              marginHorizontal: 10,
            }}
          />
          <Text>or Log in with</Text>
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: Colors.grey,
              marginHorizontal: 10,
            }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => console.log("pressed")}
            style={{
              flex: 1,
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "center",
              height: 52,
              borderWidth: 1,
              borderColor: Colors.grey,
              marginRight: 4,
              borderRadius: 10,
            }}
          >
            <Image
              source={require("@/assets/images/facebook.png")}
              style={{
                height: 36,
                width: 36,
                marginRight: 8,
              }}
              resizeMode="contain"
            />
            <Text>Facebook</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => console.log("pressed")}
            style={{
              flex: 1,
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "center",
              height: 52,
              borderWidth: 1,
              borderColor: Colors.grey,
              marginRight: 4,
              borderRadius: 10,
            }}
          >
            <Image
              source={require("@/assets/images/google-logo-9808.png")}
              style={{
                height: 36,
                width: 36,
                marginRight: 8,
              }}
              resizeMode="contain"
            />
            <Text>Google</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginVertical: 22,
          }}
        >
          <Text style={{ fontSize: 16, color: Colors.black }}>
            Don't have an account
          </Text>
          <Pressable onPress={() => navigation.navigate("Signup")}>
            <Text
              style={{
                fontSize: 16,
                color: Colors.blue,
                fontWeight: "bold",
                marginLeft: 6,
              }}
            >
              Register
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontWeight: "400",
    marginVertical: 8,
  },
  inputField: {
    width: "100%",
    height: 48,
    borderWidth: 1,
    borderColor: Colors.black,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 8,
  },
  inputNumber: {
    width: "100%",
    height: 48,
    borderWidth: 1,
    borderColor: Colors.black,
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 22,
  },
});
