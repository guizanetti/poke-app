import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
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
        <Styled.Title>Pokemon</Styled.Title>
      </Styled.Header>
      <Styled.BoxImage onPress={() => navigate("DetailItem")}>
        <Styled.Image source={{ uri: data?.url }} />
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
