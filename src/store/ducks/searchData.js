export const Types = {
    GET_REPOSITORIOS: "GET_REPOSITORIOS_ASYNC",
    GET_REPOSITORIO_DETALHADO: "GET_REPOSITORIO_DETALHADO_ASYNC",

    SET_REPOSITORIOS: "SET_REPOSITORIOS",
    SET_REPOSITORIO_DETALHADO: "SET_REPOSITORIO_DETALHADO"
};

export const Creators = {
    getRepositorios: (textoPesquisa, pagina)=>({
        type: Types.GET_REPOSITORIOS,
        payload: {
            textoPesquisa,
            pagina
        }
    }),

    getRepositorioDetalhado: (nomeRepo)=>({
        type: Types.GET_REPOSITORIO_DETALHADO,
        payload: nomeRepo
    }),
    
    setDados: (dados)=>({
        type: Types.SET_REPOSITORIOS,
        payload: dados
    }),

    setRepositorioDetalhado: (textoPesquisa)=>({
        type: Types.SET_REPOSITORIO_DETALHADO,
        payload: textoPesquisa
    })
};

const STATE_INICIAL = {
    repositorioDetalhado: {
        dataRepo: null,
        dataIssues: null
    },

    repositorios: null,
    pagina: 0,
};

export default function reducer(state=STATE_INICIAL, { type, payload }) {
    switch(type) {
        case Types.SET_REPOSITORIOS:
            return {
                ...state,
                repositorios: payload
            };

        case Types.SET_REPOSITORIO_DETALHADO:
            return {
                ...state,
                repositorioDetalhado: {
                    dataRepo: payload.dataRepo.items[0],
                    dataIssues: payload.dataIssues.items
                }
            };

        default:
            return state;
    };
};