import React, {useState} from "react";
import styles from "./CriarConta.module.css"
import Header from "../../components/header/Header";
import {useNavigate} from 'react-router-dom';
import { criarConta } from "../../../service/Aperacoes/operacoes";

const CriarConta =()=>{
    const [formData,setFormData] = useState({
        nome: "",
        idade:"",
        documento: '',
        email: "",
        senha: "",
        confirmarSenha: "",
        tipoConta: 'corrente',
    });
    const handleChange =(e) =>{
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {       
        e.preventDefault();
        if (formData.senha !== formData.confirmarSenha) {
            alert('As senhas não coincidem');
            return;
        } try {
            await criarConta(formData);
            alert('Conta criada com sucesso!');
            navigate('/Home');
        } catch (error) {
            console.error('Erro ao criar conta:', error);
            alert('Erro ao criar conta. Tente novamente.');
        }
       
};
const navigate = useNavigate();

return (
    <div className={styles.container01}>
    <Header />
    <div className={styles.container}>
  
        <div className={styles.content}>
                <h1>Criar Conta</h1>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <input
                    type="text"
                    name="nome"
                    placeholder="Digite seu nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    />
                    <input
                    type="number"
                    name="idade"
                    placeholder="Digite sua idade"
                    value={formData.idade}
                    onChange={handleChange}
                    required
                    />
                    <input
                    type="text"
                    name="documento"
                    placeholder="Digite seu documento"
                    value={formData.documento}
                    onChange={handleChange}
                    required
                    />
                    <input
                    type="email"
                    name="email"
                    placeholder="Digite seu Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    />
                    <input
                    type="password"
                    name="senha"
                    placeholder="digite a sua senha"
                    value={formData.senha}
                    onChange={handleChange}
                    required
                    />
                    <input 
                    type="password"
                    name="confirmarSenha"
                    placeholder="confirmarSenha"
                    value={formData.confirmarSenha}
                    onChange={handleChange}
                    required
                    />
                 <div className={styles.radioGroup}>
                        <label>
                            <input
                                type="radio"
                                name="tipoConta"
                                value="corrente"
                                checked={formData.tipoConta === 'corrente'}
                                onChange={handleChange}
                            />
                            Conta Corrente
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="tipoConta"
                                value="poupanca"
                                checked={formData.tipoConta === 'poupanca'}
                                onChange={handleChange}
                            />
                            Poupança
                        </label>
                    </div>
                    <button className={styles.button} type="submit">Criar Conta</button>
                </form>
        </div>
            </div>
        </div>
    );
};

export default CriarConta;