import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import './style.css';

import logo_img from '../../assets/logo.svg';
import heroes_img from '../../assets/heroes.png';

export default function Logon(){
    const [id, setID] = useState('');
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try{
            const response = await api.post('login', { id });

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongNome', response.data.nome);

            history.push('/casos')
        } catch(err){
            alert('Falha no login, tente novamente');
        }

    }

    return(
        <div className="logon-container">

            <section className="form">
                
                <img src={logo_img} alt="Logo" />

                <form onSubmit={handleLogin}>

                    <h1> Faça seu Logon </h1>

                    <input 
                        placeholder="Seu ID"
                        value = {id}
                        onChange = {e => setID(e.target.value)}
                    />
                    <button className="botao" type="submit"> Entrar </button>

                    <Link className="back-link" to="/cadastro">
                        <FiLogIn size={16} color="#E02041" />
                        Não tenho cadastro
                    </Link>

                </form>

            </section>

            <img src={heroes_img} alt="Hereos"/>

        </div>
    );
}