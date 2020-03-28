import React, { useState, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

import './style.css';

import logo_img from '../../assets/logo.svg';

export default function Profile(){
    const [incidents, setIncidents] = useState([]);

    const ongId = localStorage.getItem('ongId');
    const ongNome = localStorage.getItem('ongNome');

    const history = useHistory();

    useEffect(() => {
        api.get('profile', {
            headers: {
                autorizacao: ongId, 
            }
        }).then(response => {
            setIncidents(response.data);
        })
    }, [ongId]);

    async function handleDeleteIncidents(id){
        try{
            await api.delete(`incidents/${id}`, {
                headers: {
                    autorizacao: ongId,
                }
            });

            setIncidents(incidents.filter(incident => incident.id !== id));
        }catch{
            alert('Erro ao deletar o caso, tente novamente');
        }
    }

    function handleLogout(){
        localStorage.clear();

        history.push('/');
    }

    return(
        <div className="profile-container">
            <header>
                <img src={logo_img} alt="Logo" />
                <span> Bem Vinda, {ongNome} </span>

                <Link className="botao" to="/casos/novo"> Cadastrar novo caso </Link>

                <button onClick={handleLogout} type="button"> 
                    <FiPower size={18} color="#e02041" />
                </button>
            </header>

            <h1> Casos cadastrados </h1>

            <ul>
                {incidents.map(incident => (
                    <li key={incident.id}>
                    <strong>CASO:</strong>
                    <p>{incident.titulo}</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>{incident.descricao}</p>

                    <strong>VALOR:</strong> 
                    <p>{Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(incident.valor)}</p>

                    <button onClick={ () => handleDeleteIncidents(incident.id)}  type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
                ))}
            </ul>
        </div>
    );
}