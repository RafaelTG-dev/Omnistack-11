import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './style.css';

import logo_img from '../../assets/logo.svg';

export default function NewIncident(){
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [valor, setValor] = useState('');

    const history = useHistory();

    const ongId = localStorage.getItem('ongId');

    async function handleNewIncident(e){
        e.preventDefault();

        const data = {
            titulo,
            descricao,
            valor,
        };

        try{
            await api.post('incidents', data, {
                headers:{
                    autorizacao : ongId,
                }
            })

            history.push('/casos')
        }catch(err){
            alert('O caso não foi criado, favor tentar novamente')
        }
    }

    return(
        <div className="newincident-container">
            <div className="content">
                <section>
                    <img src={logo_img} alt="Logo" />

                    <h1> Cadastrar novo caso </h1>

                    <p>
                        Descreva o caso detalhadamente para encontrar um herói  para resolver isso.
                    </p>

                    <Link className="back-link" to="/casos">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar para home
                    </Link>
                    
                </section>

                <form onSubmit={handleNewIncident}>
                    <input 
                        placeholder="Título do caso" 
                        value = {titulo}
                        onChange = {e => setTitulo(e.target.value)}
                    />
                    <textarea 
                        placeholder="Descrição" 
                        value = {descricao}
                        onChange = {e => setDescricao(e.target.value)}
                    />
                    <input 
                        placeholder="Valor em R$" 
                        value = {valor}
                        onChange = {e => setValor(e.target.value)}
                    />
                    
                    <button className="botao" type="submit"> Cadastrar </button>
                </form>
            </div>
        </div>
    );
}