import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Comidas from './pages/Comidas';
import Bebidas from './pages/Bebidas';
import Perfil from './pages/Perfil';
import Explorar from './pages/Explorar';
import Bebidas from './pages/Bebidas';
import BebidasPorIngredientes from './pages/BebidasPorIngredientes';
import ComidasPorIngredientes from './pages/ComidasPorIngredientes';
import ComidasPorLocal from './pages/ComidasPorLocal';
import DetalhesBebida from './pages/DetalhesBebida';
import DetalhesComida from './pages/DetalhesComida';
import ExplorarBebidas from './pages/ExplorarBebidas';
import ExplorarComidas from './pages/ExplorarComidas';
import ProcessoBebida from './pages/ProcessoBebida';
import ProcessoComida from './pages/ProcessoComida';
import ReceitasFavoritas from './pages/ReceitasFavoritas';
import ReceitasFeitas from './pages/ReceitasFeitas';
import AppDeReceitasProveider from './Context/AppDeReceitasProvider';

function App() {
  return (
    <AppDeReceitasProveider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route path="/comidas/:id/in-progress" component={ ProcessoComida } />
          <Route path="/comidas/:id" component={ DetalhesComida } />
          <Route path="/comidas" component={ Comidas } />
          <Route path="/bebidas/:id/in-progress" component={ ProcessoBebida } />
          <Route path="/bebidas/:id" component={ DetalhesBebida } />
          <Route path="/bebidas" component={ Bebidas } />
          <Route path="/explorar/comidas/area" component={ ComidasPorLocal } />
          <Route
            path="/explorar/comidas/ingredientes"
            component={ ComidasPorIngredientes }
          />
          <Route path="/explorar/comidas" component={ ExplorarComidas } />
          <Route
            path="/explorar/bebidas/ingredientes"
            component={ BebidasPorIngredientes }
          />
          <Route path="/explorar/bebidas" component={ ExplorarBebidas } />
          <Route path="/explorar" component={ Explorar } />
          <Route path="/perfil" component={ Perfil } />
          <Route path="/receitas-feitas" component={ ReceitasFeitas } />
          <Route path="/receitas-favoritas" component={ ReceitasFavoritas } />
        </Switch>
      </BrowserRouter>
    </AppDeReceitasProveider>
  );
}

export default App;
