import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { AppLoading } from "expo";
import { Text, View } from "react-native";
import * as Font from "expo-font";
import { Asset } from "expo-asset";

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const preLoad = async () => {
    try {
      await Font.loadAsync({
        ...Ionicons.font
      });
      await Asset.loadAsync([require("./assets/logo.png")]);
      setLoaded(true);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    preLoad();
  }, []);
  return loaded ? (
    <View>
      <Text>개간녕</Text>
    </View>
  ) : (
    <AppLoading />
  );
}
