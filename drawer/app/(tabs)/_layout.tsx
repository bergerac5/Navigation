import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from "@/constants/Colors";
import { FontAwesome } from '@expo/vector-icons';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="Home"
          options={{
            drawerLabel: "Home",
            title: "Home",
            drawerIcon: () =>{
              return <Ionicons name="home" size={24} color={Colors.bluewhite} />;
            }
          }}
        />
        <Drawer.Screen
          name="About"
          options={{
            drawerLabel: "About",
            title: "About us",
            drawerIcon: () =>{
              return <Ionicons name="information-circle" size={24} color={Colors.bluewhite} />;
            }
          }}
        />
        <Drawer.Screen
          name="Calculator"
          options={{
            drawerLabel: "Calculator",
            title: "Calculator",
            drawerIcon: () =>{
              return <Ionicons name="calculator-sharp" size={24} color={Colors.bluewhite} />;
            }
          }}
        />
        <Drawer.Screen
          name="SignIn"
          options={{
            drawerLabel: "Log in",
            title: "Login",
            drawerIcon: () =>{
              return <FontAwesome name="sign-in" size={24} color={Colors.bluewhite} />;
            }
          }}
        />
        <Drawer.Screen
          name="Signup"
          options={{
            drawerLabel: "Register",
            title: "Regiters",
            drawerIcon: () =>{
              return <Ionicons name="create-sharp" size={24} color={Colors.bluewhite} />;
            }
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
