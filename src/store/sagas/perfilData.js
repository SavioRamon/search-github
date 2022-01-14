import { call, put } from "redux-saga/effects";

import { apiRequisicoes } from "../../servicos/api";

import { Creators as perfilCreators } from "../ducks/perfilData";


export function* getPerfilRepositorioUnico(dados) {
    const { perfil, nomeRepositorio } = dados.payload;

    const {dataRepo, dataIssues} = yield call(apiRequisicoes.getRepositorioUnico, perfil, nomeRepositorio);

    if(dataRepo.total_count > 0) {
        yield put(perfilCreators.setRepositorioPerfil({dataRepo, dataIssues}));
    };

    yield put(perfilCreators.setLoad(true));
};