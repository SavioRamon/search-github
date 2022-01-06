import { useLayoutEffect, useState } from "react";
import "./style.css";

import { useSelector } from "react-redux";

import { useParams, useNavigate } from "react-router-dom";


function carregaTotalDePaginas(dadosRepositorios) {
    
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


function retornaPaginacao(paginasTot, paginaAtual) {
    // Retorna Array de paginação
    /*
        Exemplo de retorno quando a páginaAtual é 5:
        listaDePaginas = [(1), (...), (3), (4), ((5)), (6), (7), (...), (99)]
    */
    
    let listaDePaginas = [];
    const primeiraPagina = 1;
    const ultimaPagina = paginasTot;

    for(let numero = 1; numero <= ultimaPagina; numero++){
        let valorParaAdicionar;
        const espacamentoEntrePaginas = Math.abs(paginaAtual - numero);

        (function personalizandoArray(){
            (numero === primeiraPagina) && (valorParaAdicionar = primeiraPagina);
        
            (espacamentoEntrePaginas <= 2) && (valorParaAdicionar = numero);
    
            (espacamentoEntrePaginas === 3) && (valorParaAdicionar = "...");   
            
            (numero === ultimaPagina) && (valorParaAdicionar = ultimaPagina);
                
            valorParaAdicionar && listaDePaginas.push(valorParaAdicionar);
        }()) 
    }

    return listaDePaginas;
}



export default function PaginasRepositorios() {

    const [arrayPaginas, setArrayPaginas] = useState([]);

    const dadosRepositorios = useSelector(state=>state.searchData.repositorios);

    const { pagina=1 } = useParams();
    const navigate = useNavigate();


    useLayoutEffect(()=>{
        if(dadosRepositorios && dadosRepositorios.total_count) {
            // Inicia o carregamento das páginas
            const totalDePaginas = carregaTotalDePaginas(dadosRepositorios);

            const paginasEmLista = retornaPaginacao(totalDePaginas, pagina);

            setArrayPaginas(paginasEmLista);

        };
    }, [dadosRepositorios]);


    return (
        <div className="area-paginacao">
            <nav className="paginacao-navegacao">
            
            </nav>
        </div>
        
    );
};