import React from "react";
import * as Styled from "./styled";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

const Header = ({ backButton }) => {
  const { goBack } = useNavigation();
  return (
    <Styled.Container>
      {backButton && (
        <Styled.BackButton onPress={goBack}>
          <Feather name="chevron-left" size={24} color="#fff" />
        </Styled.BackButton>
      )}
      <Styled.Title>Pokedex</Styled.Title>
    </Styled.Container>
  );
};

export default Header;
