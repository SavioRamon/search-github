
import "./style.css";

import { useParams } from "react-router-dom";


export default function Repositorio() {

    const { nomeRepositorio } = useParams();

    return (
        <div className="repositorio-detalhado">
            { nomeRepositorio }
        </div>
    )
}