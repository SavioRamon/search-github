const BASE_API = "https://api.github.com";
const porPagina = 20;

export const apiRequisicoes = {
    async getRepositorios(textoPesquisa, pagina=0){
        const url =
        `${BASE_API}/search/repositories?q=${textoPesquisa}/&page=${pagina}&per_page=${porPagina}`;

        const data = await fetch(url).then(dados=>dados.json());
        
        return data;
    }
}