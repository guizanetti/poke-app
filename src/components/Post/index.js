import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { FontAwesome, Feather } from "@expo/vector-icons";
import Avatar from "../../../assets/avatar.png"
import * as Styled from "./styled";

const Post = ({ data, onPress, id }) => {
  const [isLike, setIsLike] = useState(false);

  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.Avatar source={Avatar} />
        <View>
          <Styled.Title>Pokemon</Styled.Title>

          <Text
            style={{
              color: "#fff4",
              marginLeft: 11,
              textTransform: "capitalize",
            }}
          >
            {data.name}
          </Text>
        </View>
      </Styled.Header>
      <Styled.BoxImage onPress={onPress}>
        <Styled.Image
          source={{
            uri: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/0${id.toString().padStart(2, '0')}.png`,
          }}
        />
      </Styled.BoxImage>
      <Styled.Box>
        <TouchableOpacity onPress={() => setIsLike(!isLike)}>
          <FontAwesome
            name={isLike ? "heart" : "heart-o"}
            size={24}
            color={isLike ? "#ED1C24" : "#fff"}
          />
        </TouchableOpacity>
      </Styled.Box>
    </Styled.Container>
  );
};

export default Post;
