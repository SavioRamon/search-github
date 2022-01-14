import { call, put } from "redux-saga/effects";

import { apiRequisicoes } from "../../servicos/api";

import { Creators as perfilCreators } from "../ducks/perfilData";

export function* getPerfil(dados) {
    const nomePerfil = dados.payload;

    const dadosPerfil = yield call(apiRequisicoes.getPerfilUsuario, nomePerfil);

    if(dadosPerfil) {
        yield put(perfilCreators.setPerfil(dadosPerfil));
    }

    yield put(perfilCreators.setLoad(true));
}


export function* getPerfilRepositorioUnico(dados) {
    const { perfil, nomeRepositorio } = dados.payload;

    const {dataRepo, dataIssues} = yield call(apiRequisicoes.getRepositorioUnico, perfil, nomeRepositorio);

    if(dataRepo.total_count > 0) {
        yield put(perfilCreators.setRepositorioPerfil({dataRepo, dataIssues}));
    };

    yield put(perfilCreators.setLoad(true));
};