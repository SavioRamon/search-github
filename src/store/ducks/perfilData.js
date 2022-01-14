export const Types = {
    GET_PERFIL_DADOS: "GET_PERFIL_DADOS_ASYNC",
    GET_REPOSITORIO_PERFIL: "GET_REPOSITORIO_PERFIL_ASYNC",

    SET_PERFIL: "SET_PERFIL",
    SET_REPOSITORIO_UNIDADE: "SET_REPOSITORIO_UNIDADE",
    SET_LOAD: "SET_LOAD"
}


export const Creators = {
    getPerfil: (nomePerfil)=>({
        type: Types.GET_PERFIL_DADOS,
        payload: nomePerfil
    }),

    getRepositorio: (perfil, nomeRepositorio)=>({
        type: Types.GET_REPOSITORIO_PERFIL,
        payload: {
            perfil,
            nomeRepositorio
        }
    }),

    setPerfil: (perfil)=>({
        type: Types.SET_PERFIL,
        payload: perfil
    }),

    setRepositorioPerfil: (repositorio)=>({
        type: Types.SET_REPOSITORIO_UNIDADE,
        payload: repositorio
    }),

    setLoad: (valor)=>({
        type: Types.SET_LOAD,
        payload: valor
    })
}

const STATE_INICIAL = {
    perfilDados: null,
    dataRepo: null,
    dataIssues: null,
    load: true
}

export default function perfilData(state=STATE_INICIAL, { type, payload }) {
    switch(type) {
        case Types.SET_PERFIL:
            return {
                ...state,
                perfilDados: payload
            };
        
        case Types.SET_REPOSITORIO_UNIDADE:
            return {
                ...state,
                dataRepo: payload.dataRepo.items[0],
                dataIssues: payload.dataIssues.items
            }

        case Types.SET_LOAD:
            return {
                ...state,
                load: payload
            }

        default:
            return state;
    }
}