import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {AuthProvider} from './contextos/AuthContext';
import Contador from './Contador';
import Login from './views/Login';
import { Helmet, HelmetProvider } from 'react-helmet-async';


function App() {
  const helmetContext = {};

  return (
    <HelmetProvider context={helmetContext}>
      <Helmet>
        <title>Hello World</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <AuthProvider>
        <div>
          <Router>
              <Routes>
                  <Route exact path="/" element={<Contador />} />
                  <Route path="/login" element={<Login />}/>                  
              </Routes>
            </Router>
        </div>
      </AuthProvider>
    </HelmetProvider>
  );
}

export default App;
