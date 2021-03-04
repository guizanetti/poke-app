import React, { useEffect } from "react";
import { ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header";
import Post from "../../components/Post";
import { requestList, requestListSuccess } from "../../redux/feed";

const Home = () => {
  const {
    feed: { list },
  } = useSelector((value) => value);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestList());
  }, []);

  return (
    <ScrollView>
      <Header />
      {list?.map((i, index) => (
        <Post data={i} key={index} />
      ))}
    </ScrollView>
  );
};

export default Home;
