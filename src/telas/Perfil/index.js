import React, { useLayoutEffect } from "react";
import "./style.css";

import GifLoader from "../../componentes/GifLoader";

import { VscRepoForked } from "react-icons/vsc";
import { BsStarFill, BsEyeFill, BsCodeSlash } from "react-icons/bs";
import { FaBalanceScale, FaRegCommentAlt } from "react-icons/fa";

import { Creators as searchCreators } from "../../store/ducks/searchData";
import { useDispatch, useSelector } from "react-redux";

import { useParams } from "react-router-dom";

import moment from "moment";


function convertendoData(dataISO) {
    return `Updated ${moment(dataISO).fromNow()}`;
};


export default function Perfil() {

    const { perfil } = useParams();
    const { dataRepo, dataIssues } = useSelector(state=>state.searchData.repositorioDetalhado);
    const load = useSelector(state=>state.searchData.load);

    const dispatch = useDispatch();

    useLayoutEffect(()=>{
        (function getRequisicaoUnicoRepositorio(){

            // setLoad false diz para o script que a requisição ainda não foi completada
            dispatch(searchCreators.setLoad(false));

            // chamando creator de requisição
            dispatch(searchCreators.getRepositorioDetalhado(perfil));
        }());
    }, [dispatch, perfil]);
    
    return (
        <section className="perfil">

            {!load &&
                <GifLoader />
            }

            {load && !dataRepo &&
                // Repositório Não foi encontrado
                <div className="sem-perfil">
                    Repositorio não encontrado
                </div>
            }

            {load && dataRepo &&
                <React.Fragment>
                    <article className="info-basica-perfil">
                        <img 
                            className="imagem-usuario-repositorio" 
                            src={dataRepo.owner.avatar_url} 
                            alt="imagem de perfil"
                        />
                        <p className="nome-usuario">
                            {dataRepo.owner.login}
                        </p>
                    </article>


                    <div className="area-repositorio">
                        <div className="area-esquerda">
                            <h1 className="nome-detalhe">{dataRepo.name}</h1>
                            <p className="descricao-detalhe">{dataRepo.description}</p>

                            <ul className="lista-tags-detalhe">
                                {dataRepo.topics.map((topico, key)=>{
                                    return (
                                        <li key={key}>
                                            <a target="_blank" rel="noreferrer" href={`https://github.com/topics/${topico}`}>
                                                {topico}
                                            </a>
                                        </li>
                                    )
                                })}
                                
                            </ul>
                        </div>

                        <div className="area-direita">

                            <div className="direita-item data">
                                {convertendoData(dataRepo.update_at)}
                            </div>

                            <div className="direita-item estrelas">
                                <span className="star">
                                    <BsStarFill />
                                </span>
                                {dataRepo.stargazers_count}

                            </div>

                            <div className="direita-item viewers">
                                <span className="eye">
                                    <BsEyeFill />
                                </span>
                                {dataRepo.watchers_count}

                            </div>
                            
                            <div className="direita-item forks">
                                <span className="fork">
                                    <VscRepoForked />
                                </span>
                                {dataRepo.forks_count}
                                
                            </div>

                            {dataRepo.language &&
                                <div className="direita-item linguagem">
                                    <span className="language">
                                        <BsCodeSlash />
                                    </span>
                                    {dataRepo.language}
                                </div>
                            }

                            {dataRepo.license &&
                                <div className="direita-item licenca">
                                    <span className="license">
                                        <FaBalanceScale />
                                    </span>
                                    licença {dataRepo.license.spdx_id}

                                </div>
                            }

                        </div>
                        
                    </div>

                    {dataIssues &&
                        <div className="area-issues">
                            <h2>Issues</h2>
                            
                            <div className="lista-issues">
                                {dataIssues.map((itemIssue, key)=>{
                                    if(itemIssue.state === "open") {
                                        return (
                                            <div className="item-issue" key={key}>
                                                <span>{itemIssue.title}</span>
                                                <div className="comentarios">
                                                    <span>
                                                        <FaRegCommentAlt />
                                                    </span>
                                                    <span>
                                                        {itemIssue.comments}
                                                    </span>
                                                        
                                                </div>
                                            </div>
    
                                        )
                                    } else {
                                        return null
                                    }
                                })}
                            </div>
                        </div>
                    }
                    
                </React.Fragment>        
            }
        </section>
    );
};