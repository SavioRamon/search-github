import { useEffect } from "react";
import "./style.css";

import { useDispatch, useSelector } from "react-redux";
import { Creators as searchCreators } from "../../store/ducks/searchData";

import { useParams } from "react-router-dom";


export default function Repositorios() {
    const dispatch = useDispatch();
    const { searchText } = useParams();

    const repositorios = useSelector(state=>state.searchData.repositorios)
    
    useEffect(()=>{
        dispatch(searchCreators.getRepositorios(searchText));
    }, []);

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

                  
              </li>  
              )
              
            })
          }
            
        </ul>
        
      </section>
    )
}