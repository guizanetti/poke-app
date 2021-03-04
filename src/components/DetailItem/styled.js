import styled from "styled-components";
import { getPercentageSizeWidth } from "../../utils/size";

export const Container = styled.View`
  width: ${getPercentageSizeWidth(90)}px;
  align-items: center;
  border-radius: 8px;
  background-color: #30a7d7;
`;
export const Group = styled.View`
  width: 90%;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
`;

export const BoxInfo = styled.View`
  width: 40%;
  align-items: center;
  margin-top: 25px;
  padding-bottom: 20px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #000;
`;

export const Info = styled.Text`
  margin-top: 5px;
  font-weight: 500;
  color: #fff;
`;

export const BoxImage = styled.View``;

export const Name = styled.Text`
  font-size: 30px;
  color: #000;
`;

export const Image = styled.Image`
  width: 150px;
  height: 150px;
`;
