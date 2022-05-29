import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import "./assets/reset.css"
import "./assets/style.css"

import TelaLogin from './TelaLogin';
import TelaCadastro from './TelaCadastro';
import TelaHabitos from './TelaHabitos';
import TelaHoje from './TelaHoje';
import TelaHistorico from './TelaHistorico';
import UserContext from './contexts/UserContext';


export default function App(){

    // const [token, setToken] = useState('')
    const [dados, setDados] = useState({})
    
    return(
    <UserContext.Provider value = {{dados, setDados}}>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<TelaLogin />} />
            <Route path="/cadastro" element={<TelaCadastro />} />
            <Route path="/habitos" element={<TelaHabitos />} />
            <Route path="/hoje" element={<TelaHoje />} />
            <Route path="/historico" element={<TelaHistorico />} />
        </Routes>
    </BrowserRouter> 
    </UserContext.Provider>
    
    
        
    )       
}