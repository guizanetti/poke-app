import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { FontAwesome, Feather } from "@expo/vector-icons";
import Avatar from "../../../assets/avatar.png";

import * as Styled from "./styled";
import { useNavigation } from "@react-navigation/native";

const Post = ({ data }) => {
  const [isLike, setIsLike] = useState(false);
  const { navigate } = useNavigation();

  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.Avatar source={Avatar} />
        <View>
          <Styled.Title>Pokemon</Styled.Title>
          <Text style={{ color: "#fff", marginLeft: 11 }}>{data.name}</Text>
        </View>
      </Styled.Header>
      <Styled.BoxImage onPress={() => navigate("DetailScreen")}>
        <Styled.Image
          source={{
            uri:
              "https://thumbs.dreamstime.com/b/ilustra%C3%A7%C3%A3o-do-vetor-de-pikachu-no-pokeball-isolado-fundo-branco-pokemon-136791058.jpg",
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
        <TouchableOpacity>
          <Feather style={{ marginLeft: 10 }} name='message-circle' size={24} color='#fff' />
        </TouchableOpacity>
      </Styled.Box>
    </Styled.Container>
  );
};

export default Post;
