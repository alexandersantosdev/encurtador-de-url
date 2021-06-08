import React, { useState, useEffect } from "react";

import StatusBarPage from "../../components/StatusBarPage";
import { Container, Title, ListLinks, WarningText, ContainerEmpty } from "./styles";

import ModalLink from '../../components/ModalLink';
import {Modal, ActivityIndicator} from 'react-native';
import Menu from "../../components/Menu";
import ListItem from "../../components/ListItem";
import { useIsFocused } from "@react-navigation/native";

import { getLinksSaved, deleteLink } from "../../utils/storeLinks";

const MyLinks = () => {
  const [links, setLinks] = useState([]);
  const [data, setData] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const isFocused = useIsFocused();

  useEffect(() => {
    async function getLinks() {
      const result = await getLinksSaved("links");
      setLinks(result);
      setLoading(false);
    }

    getLinks();
  }, [isFocused]);

  function handleItem(item){
    setData(item);
    setModalVisible(true);
  }

  async function handleDelete(id){
    const result = await deleteLink(links, id);
    setLinks(result);
  }

  return (
    <Container>
      <StatusBarPage backgroundColor="#132742" barStyle="light-content" />
      <Menu />
      <Title>Meus Links</Title>
      {
        loading && (
          <ContainerEmpty>

          <ActivityIndicator 
          size={25}
          color="#fff"
          />
          </ContainerEmpty>
        )
      }
      {!loading && links.length === 0 && (
        <ContainerEmpty>
          <WarningText>Você ainda não possui nenhum link</WarningText>
        </ContainerEmpty>
      )}
      <ListLinks
        data={links}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => <ListItem data={item} selectedItem ={handleItem} deleteItem={handleDelete}/>}
        contentContainerStyle={{ paddingBottom: 20 }}
        showVerticalScrollIndicator={false}
      />

      <Modal visible={modalVisible} transparent animationType="slide">
        <ModalLink onClose={() => setModalVisible(false)} data={data} />
      </Modal>
    </Container>
  );
};

export default MyLinks;
