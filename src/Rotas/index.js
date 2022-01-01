
import Inicio from "../telas/Inicio";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Rotas () {

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Inicio />}>

                </Route>
            </Routes>
        </BrowserRouter>
    )
}