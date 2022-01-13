export const Types = {
    GET_REPOSITORIOS: "GET_REPOSITORIOS_ASYNC",
    GET_REPOSITORIO_DETALHADO: "GET_REPOSITORIO_DETALHADO_ASYNC",

    SET_REPOSITORIOS: "SET_REPOSITORIOS",
    SET_REPOSITORIO_DETALHADO: "SET_REPOSITORIO_DETALHADO",
    SET_LOAD: "SET_LOAD"
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
    }),

    setLoad: (valor)=>({
        type: Types.SET_LOAD,
        payload: valor
    })
};

const STATE_INICIAL = {
    repositorioDetalhado: {
        dataRepo: null,
        dataIssues: null
    },

    repositorios: null,
    pagina: 0,
    load: false
};

export default function reducer(state=STATE_INICIAL, { type, payload }) {
    switch(type) {
        case Types.SET_REPOSITORIOS:
            return {
                ...state,
                repositorios: payload,
            };

        case Types.SET_REPOSITORIO_DETALHADO:
            const detalhes = {
                dataRepo: payload.dataRepo.items[0],
                dataIssues: payload.dataIssues.items
            }
            return {
                ...state,
                repositorioDetalhado: detalhes
            };

        case Types.SET_LOAD:
            return {
                ...state,
                load: payload
            }

        default:
            return state;
    };
};