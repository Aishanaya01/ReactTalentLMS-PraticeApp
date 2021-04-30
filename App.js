import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions,StyleSheet, Text,TouchableNativeFeedback,  Image, ImageBackground, View, SafeAreaView , Button, plateform , Alert } from 'react-native';
import {useDimensions,useDeviceOrientation,} from "@react-native-community/hooks";
export default function App() {
  const { landscape } = useDeviceOrientation();
  console.log(useDimensions);
  // console.log(Dimensions.get("screen"));
//   let x= 1; 
   
//   console.log("App  executed");
//  x.toString();
 
  return (
    
      <View style={((width = "100%"), (height = landscape ? "100%" : "40%"))}>
      <ImageBackground
        style={styles.image}
        source={{ uri: "https://picsum.photos/200/300" }}
      >
        <View style={styles.container}>
          <Text style={styles.text}>Hello world</Text>
          {/* <Image
            style={styles.image}
            source={{ uri: "https://picsum.photos/200/300" }}
          /> */}
          {/* <View style={styles.loginButton}></View>
        <View style={styles.registrationButton}></View> */}
          <Button
            title="Click me"
            color="blue"
            onPress={() =>
              Alert
                //  prompt("My title", "my name", text=>console.log(text))
                .alert("Title", "Message", [
                  { text: "Yes", onPress: () => console.log("yes") },
                  { text: "No", onPress: () => console.log("no") },
                ])
            }
          />
          <StatusBar style="auto" />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // paddingTop: Platform.OS === "android" ? StatusBar.currrrentHeight : 0,
  },
  img: {
    flex: 1,
    // height: 200,
    // width: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  image: { height: "100%", width: "100%" },
  text: { fontSize: 30 },
  // loginButton: {
  //   width: "100%",
  //   height: 80,
  //   backgroundColor: "red",
  // },
  // registrationButton: {
  //   width: "100%",
  //   height: 70,
  //   backgroundColor: "red",
  // },
});
     
     