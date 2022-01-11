import { takeLatest, all } from "redux-saga/effects";

import { Types as searchData } from "../ducks/searchData";

import { getRepositorios, getRepositorioDDetalhado } from "./searchData";

export default function* rootSaga() {
    return yield all([
        takeLatest(searchData.GET_REPOSITORIOS, getRepositorios),
        takeLatest(searchData.GET_REPOSITORIO_DETALHADO, getRepositorioDDetalhado),
    ])
}