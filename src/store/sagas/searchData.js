import { call, put } from "redux-saga/effects";

import { apiRequisicoes } from "../../servicos/api";

import { Creators as searchDataCreators } from "../ducks/searchData";

export function* getRepositorios(dados) {
    const { textoPesquisa, pagina } = dados.payload;
    const data = yield call(apiRequisicoes.getRepositorios, textoPesquisa, pagina);
    
    if(data.total_count > 0) {
        yield put(searchDataCreators.setDados(data));

    }

    yield put(searchDataCreators.setLoad(true)); 
};

export function* getRepositorioDDetalhado(dados) {
    const textoPesquisa = dados.payload;
    const { dataRepo, dataIssues } = yield call(apiRequisicoes.getRepositorioUnico, textoPesquisa);
    
    if(dataRepo.total_count > 0) {
        yield put(searchDataCreators.setRepositorioDetalhado({dataRepo, dataIssues}));
    };

    yield put(searchDataCreators.setLoad(true));
};