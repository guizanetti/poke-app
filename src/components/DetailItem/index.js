import React from "react";
import { View } from "react-native";
import * as Styled from "./styled";

const DetailItem = () => {
  return (
    <Styled.Container>
      <Styled.BoxImage>
        <Styled.Image
          source={{ uri: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/132.png" }}
        />
      </Styled.BoxImage>
      <Styled.Name>Ditto</Styled.Name>
      <Styled.Group>
        <Styled.BoxInfo>
          <Styled.Title>Height</Styled.Title>
          <Styled.Info>0.3</Styled.Info>
        </Styled.BoxInfo>

        <Styled.BoxInfo>
          <Styled.Title>Weight</Styled.Title>
          <Styled.Info>4.0</Styled.Info>
        </Styled.BoxInfo>
        <Styled.BoxInfo>
          <Styled.Title>Gender</Styled.Title>
          <Styled.Info>Unknown</Styled.Info>
        </Styled.BoxInfo>
        <Styled.BoxInfo>
          <Styled.Title>Category</Styled.Title>
          <Styled.Info>Transform</Styled.Info>
        </Styled.BoxInfo>

        <Styled.BoxInfo>
          <Styled.Title>Abilities</Styled.Title>
          <Styled.Info>Limber</Styled.Info>
        </Styled.BoxInfo>
      </Styled.Group>
    </Styled.Container>
  );
};

export default DetailItem;
