
import Inicio from "../telas/Inicio";
import Busca from "../telas/Busca";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const paths = {
  home: {
    label: "Home",
    path: "/",

    search: {
      label: "Search",
      path: "/search",
      path2: "/search/:searchText/:pagina",
      path3: "/search/:searchText/"
    },

    repositorie: {
      label: "Repositorie",
      path: "/repositorie/:nomeRepositorio"
    }
  }
}


export default function Rotas () {
    return (
        <BrowserRouter>
          <Routes>
            <Route exact path={paths.home.path} element={ <Inicio /> } />
            <Route path={paths.home.search.path} element={ <Inicio /> } />

            <Route path={paths.home.search.path2} element={ <Busca /> } />
            <Route path={paths.home.search.path3} element={ <Busca /> } />
          </Routes>
        </BrowserRouter>
    )
}