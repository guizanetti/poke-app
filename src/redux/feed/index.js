import { createAction, createActions, handleActions } from "redux-actions";

export const REQUEST_LIST = "REQUEST_LIST";
export const REQUEST_LIST_SUCCESS = "REQUEST_LIST_SUCCESS";

export const { requestList, requestListSuccess } = createActions({
  [REQUEST_LIST]: (number) => ({ number }),
  [REQUEST_LIST_SUCCESS]: (data) => data,
});

export const REQUEST_DETAIL = "REQUEST_DETAIL";
export const REQUEST_DETAIL_SUCCESS = "REQUEST_DETAIL_SUCCESS";

export const { requestDetail, requestDetailSuccess } = createActions({
  [REQUEST_DETAIL]: (name) => ({ name }),
  [REQUEST_DETAIL_SUCCESS]: (data) => data,
});

export const INITIAL_STATE = {
  list: [],
  detail: {},
  qtd: 20,
};

const reducer = handleActions(
  {
    [REQUEST_LIST_SUCCESS]: (state, { payload }) => {
      return { ...state, list: payload.data, qtd: payload.qtd };
    },
    [REQUEST_DETAIL_SUCCESS]: (state, { payload }) => {
      return { ...state, detail: payload };
    },
  },
  INITIAL_STATE
);

export default reducer;
