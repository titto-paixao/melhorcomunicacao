import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import { ToastProvider } from 'react-toast-notifications';

import Routes from 'routes'
import GlobalStyle from 'styles/globals' 

import logo from 'logo.png'

const App: React.FC = () => (
  <ToastProvider
    autoDismiss
    autoDismissTimeout={6000}
  >
    <div className="container">
      <BrowserRouter>
        <header>
          <img src={logo} alt="Logo"/>
        </header>
        <main>
          <Routes />
        </main>
        <footer>
          <p>© Copyright 2020 - Melhor Celular - Todos os direitos reservados à Melhor Celular LTDA.</p>
        </footer>  
      </BrowserRouter>
      <GlobalStyle />
    </div>
  </ToastProvider>
)

export default App;
