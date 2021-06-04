import React from "react";

import StatusBarPage from "../../components/StatusBarPage";
import { Container, Title, ListLinks } from "./styles";

import Menu from "../../components/Menu";
import ListItem from "../../components/ListItem";

const MyLinks = () => {
  return (
    <Container>
      <StatusBarPage backgroundColor="#132742" barStyle="light-content" />
      <Menu />
      <Title>Meus Links</Title>
      <ListLinks
        data={[{ id: 1, link: "test.com" }]}
        keyStractor={(item) => String(item.id)}
        renderItem={({ item }) => <ListItem data={item} />}
        contentContainerStyle={{ paddingBottom: 20 }}
        showVerticalScrollIndicator={false}
      />
    </Container>
  );
};

export default MyLinks;
