import "./style.css";

import { VscGithubAlt } from "react-icons/vsc";

function Cabecalho() {

    
    return (
        <header id="cabecalho">
            <h1 className="logo"> 
                <VscGithubAlt />
            </h1>
        </header>
    )
}

export default Cabecalho;