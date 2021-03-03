import { createAction, handleActions } from "redux-actions";

export const REQUEST_LIST = "REQUEST_LIST";
export const REQUEST_LIST_SUCCESS = "REQUEST_LIST_SUCCESS";

export const { requestList, requestListSuccess } = createAction({
  [REQUEST_LIST]: () => {},
  [REQUEST_LIST_SUCCESS]: (data) => data,
});

export const INITIAL_STATE = {
  list: [
    {
      name: "pikachu",
      url:
        "https://thumbs.dreamstime.com/b/ilustra%C3%A7%C3%A3o-do-vetor-de-pikachu-no-pokeball-isolado-fundo-branco-pokemon-136791058.jpg",
    },
    {
      name: "pikachu",
      url:
        "https://thumbs.dreamstime.com/b/ilustra%C3%A7%C3%A3o-do-vetor-de-pikachu-no-pokeball-isolado-fundo-branco-pokemon-136791058.jpg",
    },
    {
      name: "pikachu",
      url:
        "https://thumbs.dreamstime.com/b/ilustra%C3%A7%C3%A3o-do-vetor-de-pikachu-no-pokeball-isolado-fundo-branco-pokemon-136791058.jpg",
    },
    {
      name: "pikachu",
      url:
        "https://thumbs.dreamstime.com/b/ilustra%C3%A7%C3%A3o-do-vetor-de-pikachu-no-pokeball-isolado-fundo-branco-pokemon-136791058.jpg",
    },
    {
      name: "pikachu",
      url:
        "https://thumbs.dreamstime.com/b/ilustra%C3%A7%C3%A3o-do-vetor-de-pikachu-no-pokeball-isolado-fundo-branco-pokemon-136791058.jpg",
    },
    {
      name: "pikachu",
      url:
        "https://thumbs.dreamstime.com/b/ilustra%C3%A7%C3%A3o-do-vetor-de-pikachu-no-pokeball-isolado-fundo-branco-pokemon-136791058.jpg",
    },
    {
      name: "pikachu",
      url:
        "https://thumbs.dreamstime.com/b/ilustra%C3%A7%C3%A3o-do-vetor-de-pikachu-no-pokeball-isolado-fundo-branco-pokemon-136791058.jpg",
    },
    {
      name: "pikachu",
      url:
        "https://thumbs.dreamstime.com/b/ilustra%C3%A7%C3%A3o-do-vetor-de-pikachu-no-pokeball-isolado-fundo-branco-pokemon-136791058.jpg",
    },
    {
      name: "pikachu",
      url:
        "https://thumbs.dreamstime.com/b/ilustra%C3%A7%C3%A3o-do-vetor-de-pikachu-no-pokeball-isolado-fundo-branco-pokemon-136791058.jpg",
    },
    {
      name: "pikachu",
      url:
        "https://thumbs.dreamstime.com/b/ilustra%C3%A7%C3%A3o-do-vetor-de-pikachu-no-pokeball-isolado-fundo-branco-pokemon-136791058.jpg",
    },
    {
      name: "pikachu",
      url:
        "https://thumbs.dreamstime.com/b/ilustra%C3%A7%C3%A3o-do-vetor-de-pikachu-no-pokeball-isolado-fundo-branco-pokemon-136791058.jpg",
    },
    {
      name: "pikachu",
      url:
        "https://thumbs.dreamstime.com/b/ilustra%C3%A7%C3%A3o-do-vetor-de-pikachu-no-pokeball-isolado-fundo-branco-pokemon-136791058.jpg",
    },
    {
      name: "pikachu",
      url:
        "https://thumbs.dreamstime.com/b/ilustra%C3%A7%C3%A3o-do-vetor-de-pikachu-no-pokeball-isolado-fundo-branco-pokemon-136791058.jpg",
    },
    {
      name: "pikachu",
      url:
        "https://thumbs.dreamstime.com/b/ilustra%C3%A7%C3%A3o-do-vetor-de-pikachu-no-pokeball-isolado-fundo-branco-pokemon-136791058.jpg",
    },
    {
      name: "pikachu",
      url:
        "https://thumbs.dreamstime.com/b/ilustra%C3%A7%C3%A3o-do-vetor-de-pikachu-no-pokeball-isolado-fundo-branco-pokemon-136791058.jpg",
    },
    {
      name: "pikachu",
      url:
        "https://thumbs.dreamstime.com/b/ilustra%C3%A7%C3%A3o-do-vetor-de-pikachu-no-pokeball-isolado-fundo-branco-pokemon-136791058.jpg",
    },
    {
      name: "pikachu",
      url:
        "https://thumbs.dreamstime.com/b/ilustra%C3%A7%C3%A3o-do-vetor-de-pikachu-no-pokeball-isolado-fundo-branco-pokemon-136791058.jpg",
    },
    {
      name: "pikachu",
      url:
        "https://thumbs.dreamstime.com/b/ilustra%C3%A7%C3%A3o-do-vetor-de-pikachu-no-pokeball-isolado-fundo-branco-pokemon-136791058.jpg",
    },
    {
      name: "pikachu",
      url:
        "https://thumbs.dreamstime.com/b/ilustra%C3%A7%C3%A3o-do-vetor-de-pikachu-no-pokeball-isolado-fundo-branco-pokemon-136791058.jpg",
    },
    {
      name: "pikachu",
      url:
        "https://thumbs.dreamstime.com/b/ilustra%C3%A7%C3%A3o-do-vetor-de-pikachu-no-pokeball-isolado-fundo-branco-pokemon-136791058.jpg",
    },
  ],
};

const reducer = handleActions(
  {
    [REQUEST_LIST_SUCCESS]: (state, payload) => {
      return { ...state, list: payload };
    },
  },
  INITIAL_STATE
);

export default reducer;
