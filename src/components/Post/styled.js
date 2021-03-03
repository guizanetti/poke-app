import styled from "styled-components/native";
import { getPercentageSizeHeight, getPercentageSizeWidth } from "../../utils/size";

export const Container = styled.View`
  align-items: center;
  margin-bottom: 10px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  width: 90%;
  margin-vertical: 10px;
`;

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-color: #fff;
`;

export const Title = styled.Text`
  font-size: 18px;
  margin-left: 10px;
  font-weight: 600;
  color: #fff;
`;

export const BoxImage = styled.TouchableOpacity``;

export const Image = styled.Image`
  width: ${getPercentageSizeWidth(90)}px;
  height: ${getPercentageSizeHeight(50)}px;
  border-radius: 8px;
`;

export const Box = styled.View`
  flex-direction: row;
  width: 90%;
  padding: 10px;
`;
