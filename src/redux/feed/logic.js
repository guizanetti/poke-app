import { createLogic } from "redux-logic";
import { requestListSuccess, REQUEST_LIST } from ".";

export const hanldeRequestList = () => {
  return createLogic({
    type: REQUEST_LIST,
    process(_, dispatch, done) {
      return fetch("https://pokeapi.co/api/v2/pokemon")
        .then((res) => res.json())
        .then((res) => {
          dispatch(requestListSuccess(res.results));
        })
        .catch((err) => console.log(err))
        .finally(done);
    },
  });
};

const configureFeedLogics = () => {
  return [hanldeRequestList()];
};

export default configureFeedLogics;
