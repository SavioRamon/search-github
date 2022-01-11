const BASE_API = "https://api.github.com/search";
const porPagina = 20;

const basicFetch = async(url)=>{
    // Função de fetch genérica
    const req = await fetch(url).then(dados=>dados.json());
    return req;
};

export const apiRequisicoes = {

    async getRepositorios(textoPesquisa, pagina=0){
        const url =
        `${BASE_API}/repositories?q=${textoPesquisa}/&page=${pagina}&per_page=${porPagina}`;

        const data = basicFetch(url);
        return data;
    },

    async getRepositorioUnico(textoPesquisa){
        const urlRepo = `${BASE_API}/repositories?q=${textoPesquisa}&per_page=1`;
        const urlIssues = `${BASE_API}/issues?q=repo:${textoPesquisa}`;

        const dataRepo = await basicFetch(urlRepo);
        const dataIssues = await basicFetch(urlIssues);

        return {
            dataRepo,
            dataIssues
        };
    }
};
