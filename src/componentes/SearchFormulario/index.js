import { useState } from "react";
import "./style.css";

import { MdClear } from "react-icons/md";

import { useNavigate } from "react-router-dom";

function SearchFormulario() {
    const navigate = useNavigate();

    const [textoBusca, setTextoBusca] = useState("");

    function enviando() {
        if(textoBusca) {
            const buscaConvertida = encodeURIComponent(textoBusca);
            navigate(`/search/${buscaConvertida}`);
        }
        
    }

    return (
        <form 
            className="formulario-busca" 
            action=""
            method=""
            onSubmit={e=>{
                e.preventDefault();
                enviando();
            }}
        >
            <label className="label-pesquisa" htmlFor="texto-pesquisa">
                <input 
                    id="texto-pesquisa"
                    type="text" 
                    placeholder="Faça uma busca" 
                    value={textoBusca}
                    onChange={e => setTextoBusca(e.target.value)}
                />

                {textoBusca &&
                    <div className="limpa-busca" onClick={()=>{
                        setTextoBusca("");
                    }}>
                        <MdClear />
                    </div>
                }

            </label>
            
            <button>Buscar</button>
        </form>
    )
};

export default SearchFormulario;