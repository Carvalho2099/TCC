import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'
import './styles.css';
import api from '../../services/api';

export default function Cadastro() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [cidade, setCidade] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();

    async function handleCadastro(e) {
        e.preventDefault();
        const data = {
            name,
            email,
            whatsapp,
            cidade,
            uf,
        };
        try {
            const response = await api.post('ongs', data)
            alert(`Seu ID de acesso: ${response.data.id}`)
            history.push('/');
        }catch(err){
            alert('Erro no cadastro, tente novamente.')
        }
    }
    return (
        <div className="cadastro-container">
            <div className="content">
                <section>
                    <h1>AJUDA ANIMAL</h1>
                    <h2>Cadastro</h2>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrar os casos da sua ONG.</p>
                    <Link className="voltar" to="/">
                        <FiArrowLeft size={16} color="white" />
                        Voltar para Home
                    </Link>
                </section>
                <form onSubmit={handleCadastro}>
                    <input
                        placeholder="Nome da ONG"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input
                        placeholder="WhatsApp"
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}
                    />
                    <div className="input-group">
                        <input
                            placeholder="Cidade"
                            value={cidade}
                            onChange={e => setCidade(e.target.value)}
                        />
                        <input
                            placeholder="UF"
                            style={{ width: 80 }}
                            value={uf}
                            onChange={e => setUf(e.target.value)}
                        />
                    </div>
                    <button className="button">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}