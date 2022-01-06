
import Inicio from "../telas/Inicio";
import Repositorios from "../telas/Repositorios";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const paths = {
  home: {
    label: "Home",
    path: "/",

    search: {
      label: "Search",
      path: "/search",

      repositories: {
        label: "Repositories",
        path: "/search/:searchText/:pagina",
        path2: "/search/:searchText/"
      }
    }
  }
}


export default function Rotas () {
    return (
        <BrowserRouter>
          <Routes>
            <Route exact path={paths.home.path} element={ <Inicio /> } />
            <Route path={paths.home.search.path} element={ <Inicio /> } />

            <Route path={paths.home.search.repositories.path} element={ <Repositorios /> } />
            <Route path={paths.home.search.repositories.path2} element={ <Repositorios /> } />
          </Routes>
        </BrowserRouter>
    )
}