import { useState } from "react";
import "./style.css";

import { MdClear } from "react-icons/md";

function SearchFormulario() {

    const [textoBusca, setTextoBusca] = useState("");

    return (
        <form 
            className="formulario-busca" 
            action="search"
            method="GET"
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
            
            <input type="button" value="Buscar" />
        </form>
    )
};

export default SearchFormulario;