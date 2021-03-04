import { createLogic } from "redux-logic";
import {
  requestListSuccess,
  REQUEST_DETAIL,
  REQUEST_LIST,
  requestDetailSuccess,
} from ".";

export const hanldeRequestList = () => {
  return createLogic({
    type: REQUEST_LIST,
    process(
      {
        action: {
          payload: { number },
        },
      },
      dispatch,
      done
    ) {
      return fetch(`https://pokeapi.co/api/v2/pokemon?limit=${number}`)
        .then((res) => res.json())
        .then((res) => {
          dispatch(requestListSuccess({ data: res.results, qtd: number + 10 }));
        })
        .catch((err) => console.log(err))
        .finally(done);
    },
  });
};

export const hanldeRequestDetail = () => {
  return createLogic({
    type: REQUEST_DETAIL,
    process(
      {
        action: {
          payload: { name },
        },
      },
      dispatch,
      done
    ) {
      return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((res) => res.json())
        .then((res) => {
          dispatch(requestDetailSuccess(res));
        })
        .catch((err) => console.log(err))
        .finally(done);
    },
  });
};

const configureFeedLogics = () => {
  return [hanldeRequestList(), hanldeRequestDetail()];
};

export default configureFeedLogics;
