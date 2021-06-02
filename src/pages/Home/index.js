import React from "react";
import { Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import StatusBarPage from '../../components/StatusBarPage'

const Home = () => {
  return (
    <LinearGradient style={{ flex: 1, justifyContent: 'center' }} colors={["#1ddbb9", "#132742"]}>
      <StatusBarPage 
      backgroundColor = "#1ddbb9"
      barStyle="light-content"
      />
      <Text>Home</Text>
    </LinearGradient>
  );
};

export default Home;
