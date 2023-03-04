import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import Title from "../components/title";
import { useNavigation } from "@react-navigation/native";


const Home = () => {
  const navigation= useNavigation()
  return (
    <View style={styles.container}>
      <Title />
      <View style={{ padding: 30 }}>
        <Text
          style={{
            textAlign: "center",
            color: "magenta",
            fontSize: 20,
            fontWeight: "600",
          }}
        >
          Quiz Rules
        </Text>
        <View style={{ paddingTop: 20 }}>
          <View
            style={{
              padding: 10,
              backgroundColor: "pink",
              borderRadius: 6,
              gap: 10,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ color: "white" }}>♦️</Text>
              <Text
                style={{
                  color: "#722F37",
                  fontSize: 15,
                  marginLeft: 6,
                  fontWeight: "500",
                }}
              >
                For Each correct answet you get 5 points
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ color: "white" }}>♦️</Text>
              <Text
                style={{
                  color: "#722F37",
                  fontSize: 15,
                  marginLeft: 6,
                  fontWeight: "500",
                }}
              >
                There is no negative marking for wrong answer
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ color: "white" }}>♦️</Text>
              <Text
                style={{
                  color: "#722F37",
                  fontSize: 15,
                  marginLeft: 6,
                  fontWeight: "500",
                }}
              >
                You should answer all the question Compulsory
              </Text>
            </View>
          </View>
        </View>
      </View>
      <Pressable
      onPress={()=> navigation.navigate("Quiz")}
        style={{
          backgroundColor: "blue",
          padding: 14,
          width:120,
          borderRadius: 25,
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 15,
        }}
      >
        <Text style={{color:"white", textAlign:"center", fontWeight:"700",}}>Start Now</Text>
      </Pressable>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
