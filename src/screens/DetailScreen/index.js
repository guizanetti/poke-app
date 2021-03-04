import React from "react";
import { useSelector } from "react-redux";
import DetailItem from "../../components/DetailItem";
import Header from "../../components/Header";
import * as Styled from "./styled";

const DetailScreen = () => {
  const {
    feed: { detail },
  } = useSelector((value) => value);

  return (
    <>
      <Header backButton />
      <Styled.Container>
        <DetailItem data={detail} />
      </Styled.Container>
    </>
  );
};

export default DetailScreen;
