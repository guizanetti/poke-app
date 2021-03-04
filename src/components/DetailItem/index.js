import React from "react";
import * as Styled from "./styled";

const DetailItem = ({ data }) => {
  return (
    <Styled.Container>
      <Styled.BoxImage>
        <Styled.Image
          source={{
            uri: data?.sprites?.back_default,
          }}
        />
      </Styled.BoxImage>
      <Styled.Name>{data.name}</Styled.Name>
      <Styled.Group>
        <Styled.BoxInfo>
          <Styled.Title>Height</Styled.Title>
          <Styled.Info> {data.height} </Styled.Info>
        </Styled.BoxInfo>

        <Styled.BoxInfo>
          <Styled.Title>Weight</Styled.Title>
          <Styled.Info>{data.weight}</Styled.Info>
        </Styled.BoxInfo>
        <Styled.BoxInfo>
          <Styled.Title>Base Exp.</Styled.Title>
          <Styled.Info>{data.base_experience}</Styled.Info>
        </Styled.BoxInfo>

        <Styled.BoxInfo>
          <Styled.Title>Abilities</Styled.Title>
          <Styled.Info>{data.abilities[0]?.ability?.name}</Styled.Info>
        </Styled.BoxInfo>

        {data.stats.map((i, index) => (
          <Styled.BoxInfo key={index}>
            <Styled.Title>{i.stat.name}</Styled.Title>
            <Styled.Info>{i.base_stat}</Styled.Info>
          </Styled.BoxInfo>
        ))}
      </Styled.Group>
    </Styled.Container>
  );
};

export default DetailItem;
