import React from "react"
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom"
import Home from "../bancoTeste/src/Pages/banco/Home";
import BoasVindas from "../bancoTeste/src/Pages/boasVindas/BoasVindas"
import CriarConta from "../bancoTeste/src/Pages/crairConta/CriarConta";


const AppRoutes = () => {
    return (
      <Router>
        <Routes>
            <Route path="/" element={<BoasVindas />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/CriarConta" element={<CriarConta />} />
            </Routes>
            </Router>
            );
        };
        export default AppRoutes;