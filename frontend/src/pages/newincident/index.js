import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './styles.css';
import api from '../../services/api';

export default function NewIncident() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const ongId = localStorage.getItem('ongId');
    const history = useHistory();

    async function handleNewIncident(e){
        e.preventDefault();
        const data={
            title,
            description,
            value,
        };
        try{
            await api.post('incidents', data, {
                headers:{
                    Authorization:ongId
                }
            })
            history.push('/profile');
        }catch(err){
            alert('Erro ao cadastrar caso, tente novamente.')
        }
    }
    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <h1>AJUDA ANIMAL</h1>
                    <h2>Cadastrar novo caso</h2>
                    <p>Descreva o caso detalhadamente para encontrar ajuda para resolver isso.</p>
                    <Link className="voltar" to="/profile">
                        <FiArrowLeft size={16} color="white" />
                        Voltar para Home
                    </Link>
                </section>
                <form onSubmit={handleNewIncident}>
                    <input
                        placeholder="Título do caso"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <textarea
                        placeholder="Descrição"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <input
                        placeholder="Valor em reais"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />

                    <button className="button">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}