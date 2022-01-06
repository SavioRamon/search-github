import { call, put } from "redux-saga/effects";

import { apiRequisicoes } from "../../servicos/api";

import { Creators as searchDataCreators } from "../ducks/searchData";

export function* getRepositorios(dados) {
    const { textoPesquisa, pagina } = dados.payload;
    const data = yield call(apiRequisicoes.getRepositorios, textoPesquisa, pagina);
    
    if(data.items.length > 0) {
        yield put(searchDataCreators.setDados(data));

    } else {
        // Não existem resultados
    }
    
};