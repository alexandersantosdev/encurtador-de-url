import React from "react";

import {
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
  Share,
} from "react-native";
import {
  ModalContainer,
  Container,
  Header,
  LinkArea,
  Title,
  ShortLinkArea,
  ShortLinkUrl,
  LongUrl,
} from "./styles";
import Clipboard from "expo-clipboard";
import { Feather } from "@expo/vector-icons";

const ModalLink = ({ onClose, data }) => {
  const copyLink = () => {
    Clipboard.setString(data.link);
    alert("Link copiado");
  };

  const handleShare = async () => {
    try {
      const result = await Share.share({
        message: `Link: ${data.link}`,
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log("Act");
        } else {
          console.log("COmpartilhado");
        }
      } else if (result.action === Share.dismissedAction) {
        console.log("FEchado");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ModalContainer>
      <TouchableWithoutFeedback onPress={() => onClose()}>
        <View style={{ flex: 1 }}></View>
      </TouchableWithoutFeedback>
      <Container>
        <Header>
          <TouchableOpacity onPress={() => onClose()}>
            <Feather name="x" color="#212743" size={30} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleShare}>
            <Feather name="share" color="#212743" size={30} />
          </TouchableOpacity>
        </Header>
        <LinkArea>
          <Title>Link Encurtado</Title>
          <LongUrl numberOfLines={1}>{data.long_url}</LongUrl>
          <ShortLinkArea activeOpacity={1} onPress={copyLink}>
            <ShortLinkUrl numberOfLines={1}>{data.link}</ShortLinkUrl>
            <TouchableOpacity onPress={copyLink}>
              <Feather name="copy" color="#fff" size={30} />
            </TouchableOpacity>
          </ShortLinkArea>
        </LinkArea>
      </Container>
    </ModalContainer>
  );
};

export default ModalLink;
