import { useState, useLayoutEffect } from "react";
import "./style.css";

import { useSelector } from "react-redux";

function PaginasRepositorios() {

    const [paginasListagem, setPaginasListagem] = useState(0);

    const dadosRepositorios = useSelector(state=>state.searchData.repositorios);


    function carregaTotalDePaginas() {
        const todosOsResultados = dadosRepositorios.total_count;
        const repositoriosPorPagina = dadosRepositorios.items.length;
        let totalDePaginas;
        /*
        totalDePaginas é resultado da divisão entre todos os resultados de uma busca
        e a quantidade de repositórios exibidos por página.
            ex: 100 resultados / 20 repositórios por pagina = 5 páginas.
        */
        
        if(todosOsResultados > 1000) {
            // 1000 é o resultado máximo que a api do github fornece por busca.
            totalDePaginas = Math.ceil(1000 / repositoriosPorPagina);
        } else {

            totalDePaginas = Math.ceil(todosOsResultados / repositoriosPorPagina);
        };
        
        return totalDePaginas;
    };


    useLayoutEffect(()=>{
        if(dadosRepositorios && dadosRepositorios.total_count) {
            // Inicia o carregamento das páginas
            const paginas = carregaTotalDePaginas();
        };
    }, [dadosRepositorios]);


    return (
        <div className="area-paginacao">
            <nav className="paginacao-navegacao">
            
            </nav>
        </div>
        
    );
};

export default PaginasRepositorios;