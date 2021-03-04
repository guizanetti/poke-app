import React, { useEffect } from "react";
import { FlatList, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header";
import Post from "../../components/Post";
import {
  requestDetail,
  requestList,
  requestListSuccess,
} from "../../redux/feed";

const Home = ({ navigation }) => {
  const {
    feed: { list, detail, qtd },
  } = useSelector((value) => value);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestList(qtd));
  }, []);

  useEffect(() => {
    detail.name && navigation.navigate("DetailScreen");
  }, [detail]);

  return (
    <>
      <Header />
      <FlatList
        onEndReached={() => dispatch(requestList(qtd + 10))}
        onEndReachedThreshold={0.5}
        data={list}
        keyExtractor={(_, index) => index}
        renderItem={({index, item}) => {
          return (
            <Post
              key={index}
              data={item}
              id={index + 1}
              onPress={() => dispatch(requestDetail(item.name))}
            />
          );
        }}
      ></FlatList>
    </>
  );
};

export default Home;
