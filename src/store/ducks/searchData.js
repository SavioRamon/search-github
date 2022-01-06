export const Types = {
    GET_REPOSITORIOS: "GET_REPOSITORIOS_ASYNC",
    SET_REPOSITORIOS: "SET_REPOSITORIOS"
};

export const Creators = {
    getRepositorios: (textoPesquisa, pagina)=>({
        type: Types.GET_REPOSITORIOS,
        payload: {
            textoPesquisa,
            pagina
        }
    }),
    
    setDados: (dados)=>({
        type: Types.SET_REPOSITORIOS,
        payload: dados
    }),
};

const STATE_INICIAL = {
    repositorios: null,
    pagina: 0
};

export default function reducer(state=STATE_INICIAL, { type, payload }) {
    switch(type) {
        case Types.SET_REPOSITORIOS:
            return {
                ...state,
                repositorios: payload
            };

        default:
            return state;
    }
};