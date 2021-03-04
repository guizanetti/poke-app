import styled from "styled-components";

export const Container = styled.View`
  width: 90%;
  margin-bottom: 30px;
  margin-left: 15px;
  background-color: #000;
  flex-direction: row;
  align-items: center;
  border-bottom-width: 0.5px;
  border-color: #fff3;
  padding: 10px 0;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: #fff;
`;

export const BackButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 100px;
  align-items: center;
  justify-content: center;
`;
