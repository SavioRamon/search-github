import "./style.css";

import { VscGithubAlt } from "react-icons/vsc";

function Cabecalho() {

    
    return (
        <header id="cabecalho">
            <h1 className="logo"> 
                <span className="icone-logo">
                    <VscGithubAlt />
                </span>
                <p className="texto-logo">
                    SearchGithub
                    <span>Busca eficiente</span>
                </p>
            </h1>
        </header>
    )
}

export default Cabecalho;