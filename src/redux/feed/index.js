import { createAction, createActions, handleActions } from "redux-actions";

export const REQUEST_LIST = "REQUEST_LIST";
export const REQUEST_LIST_SUCCESS = "REQUEST_LIST_SUCCESS";

export const { requestList, requestListSuccess } = createActions({
  [REQUEST_LIST]: () => {},
  [REQUEST_LIST_SUCCESS]: (data) => data,
});

export const INITIAL_STATE = {
  list: [],
};

const reducer = handleActions(
  {
    [REQUEST_LIST_SUCCESS]: (state, { payload }) => {
      return { ...state, list: payload };
    },
  },
  INITIAL_STATE
);

export default reducer;
