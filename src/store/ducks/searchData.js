export const Types = {
    GET_REPOSITORIOS: "GET_REPOSITORIOS_ASYNC",
    SET_DADOS: "SET_DADOS"
};

export const Creators = {
    getRepositorios: ()=>({
        type: Types.GET_REPOSITORIOS,
    }),
    
    setDados: (dados)=>({
        type: Types.SET_DADOS,
        payload: dados
    }),
};

const STATE_INICIAL = {
    dados: null
};

export default function reducer(state=STATE_INICIAL, { type, payload }) {
    switch(type) {
        case Types.SET_DADOS:
            return {
                ...state,
                dados: payload
            };

        default:
            return state;
    }
};