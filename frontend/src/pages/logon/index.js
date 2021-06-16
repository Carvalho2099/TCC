import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import './styles.css';
import api from '../../services/api';

export default function Logon() {
    const [id, setId] = useState('');
    const history = useHistory();
    async function handleLogin(e){
        e.preventDefault();
        try{
            const response = await api.post('session', {id});
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);
            history.push('/profile');
        }catch(err){
            alert('Falha no login, tente novamente.');
        }
    }
    return (
        <div className="logon-container">
            <section className="form">
                <form onSubmit={handleLogin}>
                    <h1>AJUDA ANIMAL</h1>
                    <h2>Faça seu logon</h2>
                    <input
                        placeholder="Sua ID"
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>
                    <Link className="voltar" to="/cadastro">
                        <FiLogIn size={16} color="white" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
        </div>
    );
}
