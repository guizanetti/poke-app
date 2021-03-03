import React, { useEffect } from "react";
import { ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Post from "../../components/Post";
import { requestListSuccess } from "../../redux/feed";

const Home = () => {
  const {
    feed: { list },
  } = useSelector((value) => value);

  return (
    <ScrollView>
      {list.map((i, index) => (
        <Post data={i} key={index} />
      ))}
    </ScrollView>
  );
};

export default Home;