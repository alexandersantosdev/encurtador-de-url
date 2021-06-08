import React, { useState } from "react";
import {
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Modal,
  ActivityIndicator,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import StatusBarPage from "../../components/StatusBarPage";
import Menu from "../../components/Menu";

import { Feather } from "@expo/vector-icons";

import api from "../../services/api";
import {saveLink} from '../../utils/storeLinks';

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
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const [data, setData] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const handleShortLink = async () => {
    setLoading(true);
    try {
      const response = await api.post("/shorten", {
        long_url: input,
      });

      setData(response.data);
      setModalVisible(true);

      saveLink("links", response.data);

      Keyboard.dismiss();
      setLoading(false);
      setInput("");

    } catch (error) {

      console.log("Deu ruim " + error);
      Keyboard.dismiss();
      setLoading(false);
      setInput("");

    }
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
              {loading ? (
                <ActivityIndicator color="#121212" size={24} />
              ) : (
                <ButtonLinkText>Gerar Link</ButtonLinkText>
              )}
            </ButtonLink>
          </ContainerContent>
        </KeyboardAvoidingView>
        <Modal visible={modalVisible} transparent animationType="slide">
          <ModalLink onClose={() => setModalVisible(false)} data={data} />
        </Modal>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
};

export default Home;
