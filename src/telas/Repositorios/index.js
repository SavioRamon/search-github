import { useEffect } from "react";
import "./style.css";

import { BsStarFill } from "react-icons/bs";
import { AiOutlineFile } from "react-icons/ai";

import { useDispatch, useSelector } from "react-redux";
import { Creators as searchCreators } from "../../store/ducks/searchData";

import { useParams } from "react-router-dom";
import moment from "moment";


export default function Repositorios() {
    const dispatch = useDispatch();
    const { searchText } = useParams();

    const repositorios = useSelector(state=>state.searchData.repositorios)
    
    useEffect(()=>{
        dispatch(searchCreators.getRepositorios(searchText));
    }, []);


    function ultimaAtualizacaoRepositorio(data){
        return `Updated ${moment(data).fromNow()}`;
    }

    return (
      <section className="repositorios">
          
        <ul className="lista-repositorios">

          {repositorios &&
            repositorios.items.map((item, key)=>{
              return (
                <li className="repositorio-item" key={key}>
                  <h1>{item.name}</h1>

                  <p className="item-descricao">
                    {item.description && item.description.length > 100?
                      `${item.description.substring(0, 100)}...`
                      :
                      item.description
                    }
                  </p>

                  {item.topics.length > 0 &&
                    <ul className="lista-topicos-repositorio">
                      {item.topics.map((topico, key)=>{
                        return (
                          <li key={key}>
                              {topico}
                          </li>     
                        )
                      })}
                    </ul>
                  }
                
                  <div className="informacoes-extras">
                      <div className="info">
                          <div className="icone-info">
                              <BsStarFill />
                          </div>
                          {item.stargazers_count}
                      </div>

                      {item.language &&
                        <div className="info">
                          <div className="icone-info">
                              <AiOutlineFile />
                          </div>
                          {item.language}        
                        </div>
                      }

                      {item.license &&
                        <div className="info">
                            {item.license.spdx_id} license
                        </div>
                      }

                      <div className="info">
                          <div>
                              {ultimaAtualizacaoRepositorio(item.updated_at)}
                          </div>
                      </div>


                      
                  </div>
                  


              </li>  
              )
              
            })
          }
            
        </ul>
        
      </section>
    )
}