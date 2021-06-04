import React, { useState } from "react";
import {
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Modal,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import StatusBarPage from "../../components/StatusBarPage";
import Menu from "../../components/Menu";

import { Feather } from "@expo/vector-icons";

import {
  BoxIcon,
  Input,
  ContainerLogo,
  ContainerContent,
  Title,
  SubTitle,
  Logo,
  ContainerInput,
  ButtonLink,
  ButtonLinkText,
} from "./styles";
import ModalLink from "../../components/ModalLink";

const Home = () => {
  const [input, setInput] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const handleShortLink = () => {
    setModalVisible(true);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <LinearGradient
        style={{ flex: 1, justifyContent: "center" }}
        colors={["#1ddbb9", "#132742"]}
      >
        <StatusBarPage backgroundColor="#1ddbb9" barStyle="light-content" />
        <Menu />
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "position" : "padding"}
          enabled
        >
          <ContainerLogo>
            <Logo
              source={require("../../assets/Logo.png")}
              resizeMode="contain"
            />
          </ContainerLogo>
          <ContainerContent>
            <Title>SujeitoLink</Title>
            <SubTitle>Cole seu link para encurtar</SubTitle>

            <ContainerInput>
              <BoxIcon>
                <Feather name="link" size={22} color="#fff" />
              </BoxIcon>
              <Input
                placeholderTextColor="#fff"
                placeholder="Cole seu link aqui"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="url"
                value={input}
                onChangeText={(text) => setInput(text)}
              />
            </ContainerInput>
            <ButtonLink onPress={() => handleShortLink()}>
              <ButtonLinkText>Gerar Link</ButtonLinkText>
            </ButtonLink>
          </ContainerContent>
        </KeyboardAvoidingView>
        <Modal visible={modalVisible} transparent animationType="slide">
          <ModalLink onClose={() => setModalVisible(false)} />
        </Modal>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
};

export default Home;
