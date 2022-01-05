import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Comidas from './pages/Comidas';
import Footer from './components/Footer';
import AppDeReceitasProveider from './Context/AppDeReceitasProvider';

function App() {
  return (
    <AppDeReceitasProveider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route path="/">
            <Route path="/comidas" component={ Comidas } />
            <Route path="/bebidas" />
            <Route path="/comidas/:id" />
            <Route path="/bebidas/:id" />
            <Route path="/explorar" />
            <Route path="/explorar/comidas" />
            <Route path="/explorar/bebidas" />
            <Route path="/explorar/comidas/area" />
            <Route path="/perfil" />
            <Footer />
          </Route>
          <Route path="/receitas-feitas" />
          <Route path="/receitas-favoritas" />
          <Route path="/comidas/:id/in-progress" />
          <Route path="/bebidas/:id/in-progress" />
          <Route path="/explorar/comidas/ingredientes" />
          <Route path="/explorar/bebidas/ingredientes" />
        </Switch>
      </BrowserRouter>
    </AppDeReceitasProveider>
  );
}

export default App;
