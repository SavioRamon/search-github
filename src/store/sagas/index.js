import { takeLatest, all } from "redux-saga/effects";

import { Types as perfilData } from "../ducks/perfilData";
import { Types as searchData } from "../ducks/searchData";

import { getPerfil, getPerfilRepositorioUnico } from "./perfilData";
import { getRepositorios } from "./searchData";

export default function* rootSaga() {
    return yield all([
        takeLatest(perfilData.GET_PERFIL_DADOS, getPerfil),
        takeLatest(perfilData.GET_REPOSITORIO_PERFIL, getPerfilRepositorioUnico),

        takeLatest(searchData.GET_REPOSITORIOS, getRepositorios)
    ])
}