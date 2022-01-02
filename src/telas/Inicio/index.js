import "./style.css";

import { VscGithubAlt } from "react-icons/vsc";

import SearchFormulario from "../../componentes/SearchFormulario";

function Inicio() {
    return (
        <section className="inicio">

            <div className="logo-grande">
                    <VscGithubAlt />
            </div>


            <div className="inicio-area-formulario">
                <SearchFormulario />
            </div>
            
        </section>
    )
}

export default Inicio;