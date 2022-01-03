import { takeLatest, all } from "redux-saga/effects";

import { Types as searchData } from "../ducks/searchData";

import { getRepositorios } from "./searchData";

export default function* rootSaga() {
    return yield all([
        takeLatest(searchData.GET_REPOSITORIOS, getRepositorios),
    ])
}