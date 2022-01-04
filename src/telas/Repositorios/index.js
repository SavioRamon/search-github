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
          
        
      </section>
    )
}